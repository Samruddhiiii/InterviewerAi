# Stage 1: Build
FROM node:24.11.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:24.11.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed for runtimedo
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env.local ./

EXPOSE 3000
CMD ["npm", "run", "start"]
