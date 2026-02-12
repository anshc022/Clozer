# Test Plan: Closed Loop Logic

## Overview
This test plan covers the "Closed Loop" autonomous logic, focusing on budget constraints, error handling, and mission integrity.

## Test Cases

### 1. Budget Enforcement
**Scenario:** Verify proposal is rejected when the daily budget limit is reached.
- **Preconditions:**
  - Daily budget limit is set (e.g., $10).
  - Current daily spend is near the limit (e.g., $9.50).
- **Action:**
  - Attempt to create a new proposal with a cost that exceeds the remaining budget (e.g., $1.00).
- **Expected Result:**
  - The proposal creation should fail or return a rejection status.
  - No funds should be deducted or reserved beyond the limit.
  - A notification or log entry should indicate "Daily limit exceeded".

### 2. Stale Step Recovery
**Scenario:** Verify stale steps are recovered after 30 minutes of inactivity.
- **Preconditions:**
  - A mission step is in a "processing" or "running" state.
  - The last update timestamp for this step is > 30 minutes ago.
- **Action:**
  - Trigger the recovery/maintenance job (or wait for the scheduled interval).
- **Expected Result:**
  - The system identifies the step as stale.
  - The step status transitions to "retrying", "failed", or is reset to "pending" (depending on specific retry logic).
  - An alert or log is generated regarding the stale step recovery.

### 3. Mission Integrity (Fail-Fast)
**Scenario:** Verify mission fails if one single step fails.
- **Preconditions:**
  - A mission exists with multiple sequential steps (Step A -> Step B -> Step C).
  - Step A has completed successfully.
- **Action:**
  - Simulate a failure in Step B (e.g., API error, timeout, logic exception).
- **Expected Result:**
  - Step B is marked as "failed".
  - The entire Mission is marked as "failed" (or "stopped").
  - Step C is NOT executed.
  - Notification is sent regarding the mission failure.
