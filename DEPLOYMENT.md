# Deployment Strategy

## Overview

This project uses a hybrid deployment strategy to optimize for performance and cost.

### 1. Frontend: Vercel
- **Component:** Next.js Application
- **Host:** Vercel
- **Reasoning:** Vercel provides zero-config deployments, edge caching, and seamless integration with Next.js.
- **Workflow:** 
  - Pushes to `main` automatically trigger Vercel builds.
  - Pull Requests generate preview URLs.

### 2. Backend / Worker: VPS (Docker)
- **Component:** OpenClaw Worker ("The Brain")
- **Host:** VPS (e.g., DigitalOcean, AWS EC2, Hetzner)
- **Runtime:** Docker
- **Reasoning:** 
  - The worker requires persistent connections, long-running processes, or specific system dependencies not suitable for serverless functions.
  - Docker ensures environment consistency between development and production.
- **Workflow:**
  - Code is containerized using the `Dockerfile`.
  - The container is deployed to the VPS (can be automated via GitHub Actions in the future via SSH or a registry).

## CI/CD Pipeline

- **GitHub Actions (`.github/workflows/deploy.yml`):**
  - Triggers on push to `main` and PRs.
  - Installs dependencies and runs `npm run build` to verify the Next.js app builds correctly.

## Setup Instructions

### Frontend
1. Connect the GitHub repository to Vercel.
2. Configure environment variables in the Vercel dashboard.

### Worker
1. SSH into the VPS.
2. Clone the repository or pull the Docker image.
3. Build/Run:
   ```bash
   docker build -t openclaw-worker .
   docker run -d --name worker --restart unless-stopped --env-file .env openclaw-worker
   ```
