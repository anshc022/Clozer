-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- 1. OPS POLICY
-- Stores configuration for agent behavior, limits, and approval rules.
create table public.ops_policy (
    id uuid default uuid_generate_v4() primary key,
    key text unique not null, -- e.g., 'global_defaults', 'finance_agent'
    config jsonb not null default '{}'::jsonb, -- Stores daily_limits, auto_approve_rules, etc.
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. OPS MISSION PROPOSALS
-- Proposed missions that need approval before execution.
create table public.ops_mission_proposals (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    description text,
    status text check (status in ('pending', 'approved', 'rejected', 'draft')) default 'pending',
    priority text check (priority in ('low', 'medium', 'high', 'critical')) default 'medium',
    metadata jsonb default '{}'::jsonb,
    created_by uuid references auth.users(id), -- Optional link to auth user
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. OPS MISSIONS
-- Active, completed, or failed missions. Can be linked to a proposal.
create table public.ops_missions (
    id uuid default uuid_generate_v4() primary key,
    proposal_id uuid references public.ops_mission_proposals(id),
    name text not null,
    status text check (status in ('queued', 'running', 'completed', 'failed', 'cancelled')) default 'queued',
    result_summary text,
    context_data jsonb default '{}'::jsonb, -- Initial context/params for the mission
    started_at timestamp with time zone,
    ended_at timestamp with time zone,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. OPS MISSION STEPS
-- Granular steps within a mission.
create table public.ops_mission_steps (
    id uuid default uuid_generate_v4() primary key,
    mission_id uuid references public.ops_missions(id) on delete cascade not null,
    step_number int not null,
    name text not null,
    description text,
    status text check (status in ('pending', 'running', 'completed', 'failed', 'skipped')) default 'pending',
    input_data jsonb default '{}'::jsonb,
    output_data jsonb default '{}'::jsonb,
    error_message text,
    started_at timestamp with time zone,
    ended_at timestamp with time zone,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    unique(mission_id, step_number)
);

-- 5. OPS AGENT EVENTS
-- Audit log of raw agent events/actions.
create table public.ops_agent_events (
    id uuid default uuid_generate_v4() primary key,
    mission_id uuid references public.ops_missions(id) on delete set null, -- Optional link
    step_id uuid references public.ops_mission_steps(id) on delete set null, -- Optional link
    agent_identity text not null, -- e.g., 'agent-main', 'subagent-123'
    event_type text not null, -- e.g., 'tool_call', 'thought', 'error', 'message'
    details jsonb default '{}'::jsonb,
    severity text check (severity in ('info', 'warning', 'error', 'critical')) default 'info',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Basic defaults - adjust as needed)
alter table public.ops_policy enable row level security;
alter table public.ops_mission_proposals enable row level security;
alter table public.ops_missions enable row level security;
alter table public.ops_mission_steps enable row level security;
alter table public.ops_agent_events enable row level security;

-- For now, allow read access to authenticated users, restrict writes if needed.
-- Adjusting to 'public' for simplicity in this initial setup if no auth is strictly enforced yet,
-- but sticking to auth.uid() patterns is safer.
-- Here we'll create a permissive policy for initial dev usage (service role bypasses RLS anyway).

create policy "Enable read access for all users" on public.ops_policy for select using (true);
create policy "Enable read access for all users" on public.ops_mission_proposals for select using (true);
create policy "Enable read access for all users" on public.ops_missions for select using (true);
create policy "Enable read access for all users" on public.ops_mission_steps for select using (true);
create policy "Enable read access for all users" on public.ops_agent_events for select using (true);

-- Insert trigger for updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger update_ops_policy_modtime before update on public.ops_policy for each row execute procedure public.update_updated_at_column();
create trigger update_ops_proposals_modtime before update on public.ops_mission_proposals for each row execute procedure public.update_updated_at_column();
create trigger update_ops_missions_modtime before update on public.ops_missions for each row execute procedure public.update_updated_at_column();
