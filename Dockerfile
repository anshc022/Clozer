# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the rest of the worker code
COPY . .

# Build if necessary (typescript, etc)
# RUN npm run build

# Expose port if needed (OpenClaw worker might just be a consumer)
# EXPOSE 3000

# Start the worker
CMD ["npm", "run", "start:worker"]
