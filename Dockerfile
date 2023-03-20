# Use the latest LTS version of Node.js
FROM node:lts

FROM node:16

# Install required system packages
RUN apt-get update && \
    apt-get install -yq libnss3 chromium

# Set environment variables
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV CHROMIUM_PATH=/usr/bin/chromium-browser

ENV NODE_ENV=production
ENV PORT=3000


# Install application dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the app files to the working directory
COPY . .

# Expose the port that the app listens on
EXPOSE $PORT

# Start the app
CMD [ "npm", "start" ]
