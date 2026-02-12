#!/bin/bash
echo "Testing connectivity to Supabase Poolers..."

REGION="aws-0-eu-north-1"
HOST="$REGION.pooler.supabase.com"

echo "Resolving $HOST..."
dig +short $HOST

echo "Checking Port 6543 (Transaction)..."
nc -zv -w 5 $HOST 6543

echo "Checking Port 5432 (Session)..."
nc -zv -w 5 $HOST 5432

echo "Checking direct DB IPv6..."
host -t AAAA db.crezyzywfkomnbgdjhad.supabase.co

echo "Done."
