# MULTI-STAGE Dockerfile FOR FRONTEND

# BUILD STAGE
# Use latest node as base
FROM node:latest AS BUILD

# Create a folder for the app
RUN mkdir -p /app

# Set the current directory
WORKDIR /app

# Copy Contents of app from local to docker image
COPY ./ /app

# Install deps and create a build
RUN yarn install
RUN npm run build

# PRODUCTION STAGE --- FINAL IMAGE
# Use latest node as base 
FROM node:latest AS PRODUCTION
WORKDIR /app

# Copy contents from BUILD stage to PRODUCTION stage
COPY --from=BUILD /app/package.json /app/package.json
COPY --from=BUILD /app/next.config.js /app/next.config.js
COPY --from=BUILD /app/.next /app/.next
COPY --from=BUILD /app/.env.production /app/.env.production

# Install necessary deps
RUN yarn install --production

# Expose required port
EXPOSE 3000

# Execute the run command
CMD ["npm", "start"]