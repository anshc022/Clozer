import { supabase } from '../lib/supabaseClient';

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
};

export const updateVibes = async (userId, vibes) => {
  // Upsert ensures that if the profile doesn't exist, it is created.
  // We assume the 'profiles' table has an 'id' column referencing auth.users
  // and a 'vibes' column (likely an array of text or jsonb).
  const { data, error } = await supabase
    .from('profiles')
    .upsert({ id: userId, vibes: vibes })
    .select();
  return { data, error };
};
