# Backend Documentation

The backend for Vibe Match is powered by **Supabase** (PostgreSQL).

## Structure
- `schema.sql`: The database schema, RLS policies, and triggers.

## Setup
1. Create a Supabase project.
2. Go to the SQL Editor.
3. Paste the contents of `schema.sql` and run it.

## Future Plans
- Add Edge Functions for complex matching logic (if needed).
- Add cron jobs for daily matches.
