# MULTI-STAGE Dockerfile FOR SERVER

# BUILD STAGE
# Use latest node image as base image in build stage
FROM node:16-alpine AS BUILD

# Create the required directories
RUN mkdir -p /app/dist

# Set the working directory as /app
WORKDIR /app

# Copying server from local system to docker image
COPY ./ /app

# Installing all deps and creating a build IN BUILD STAGE
RUN yarn install
RUN yarn build

# PRODUCTION STAGE
# Use latest node image as base image in production stage
FROM node:16-alpine AS PRODUCTION
WORKDIR /app

# Copying Contents from BUILD -> server to PRODUCTION -> server
COPY --from=BUILD /app/package.json /app/
COPY --from=BUILD /app/dist /app/dist
COPY --from=BUILD /app/.env.test /app/.env

# Installing deps in PRODUCTION STAGE
RUN yarn install --production

# Expose the required port
EXPOSE 5001

# Start the application
CMD ["npm", "start"]
# dop_v1_a740bd201b90e4d3bf818339d0c0515ce9b3c74525afd8bbbcd03669860d94c5