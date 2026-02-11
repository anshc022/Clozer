-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES: Public profile data (linked to Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  avatar_url text,
  website text,
  vibe_tags text[] default '{}',
  spotify_genres text[] default '{}',
  top_artists jsonb default '[]'::jsonb,
  university text,
  
  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- MATCHES: Connections between users
create table public.matches (
  id uuid default uuid_generate_v4() primary key,
  user_a uuid references public.profiles(id) not null,
  user_b uuid references public.profiles(id) not null,
  status text check (status in ('pending', 'active', 'rejected', 'defrosted')) default 'pending',
  compatibility_score float,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Prevent duplicate matches between same pair
  unique(user_a, user_b)
);

alter table public.matches enable row level security;

create policy "Users can see their own matches."
  on matches for select
  using ( auth.uid() = user_a or auth.uid() = user_b );

-- MESSAGES: Chat history
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  match_id uuid references public.matches(id) on delete cascade not null,
  sender_id uuid references public.profiles(id) not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.messages enable row level security;

create policy "Users can view messages in their matches"
  on messages for select
  using (
    exists (
      select 1 from matches
      where id = messages.match_id
      and (user_a = auth.uid() or user_b = auth.uid())
    )
  );

create policy "Users can insert messages in their matches"
  on messages for insert
  with check (
    exists (
      select 1 from matches
      where id = messages.match_id
      and (user_a = auth.uid() or user_b = auth.uid())
    )
    and sender_id = auth.uid()
  );

-- REALTIME: Enable realtime for matches and messages
alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table matches;

-- FUNCTION: Handle new user creation automatically
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- TRIGGER: Run function on auth.users insert
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
