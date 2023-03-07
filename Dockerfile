# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Nuxt project
RUN npm run build

# Expose the app port
EXPOSE 4444

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=4444

# Set the command to start the server
CMD ["npm", "run", "start"]

