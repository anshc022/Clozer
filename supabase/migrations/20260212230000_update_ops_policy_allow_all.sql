-- Update ops_policy to auto-approve everything
-- This overrides previous rules with a blanket auto_approve flag if the system supports it,
-- or clears restrictive rules and sets a permissive defaults.

UPDATE public.ops_policy
SET config = jsonb_set(
    config,
    '{auto_approve}',
    'true'::jsonb
)
WHERE key = 'global_defaults';

-- Also update auto_approve_rules to be explicitly permissive as a fallback
UPDATE public.ops_policy
SET config = jsonb_set(
    config,
    '{auto_approve_rules}',
    '[{"type": "wildcard", "value": "*", "action": "approve"}]'::jsonb
)
WHERE key = 'global_defaults';
