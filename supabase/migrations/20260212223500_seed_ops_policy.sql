-- Seed data for ops_policy

INSERT INTO public.ops_policy (key, config)
VALUES 
(
    'global_defaults',
    '{
        "daily_limits": {
            "tokens": 1000000,
            "missions": 50,
            "cost_usd": 10.00
        },
        "auto_approve": true,
        "auto_approve_rules": [
            {
                "type": "wildcard",
                "value": "*",
                "action": "approve"
            }
        ],
        "notification_channels": {
            "approvals": "discord_channel_id",
            "alerts": "discord_channel_id"
        }
    }'::jsonb
)
ON CONFLICT (key) DO NOTHING;
