# Use the official Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the app
COPY . .

# Build the app
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]
