FROM node:14

# Copy everything from the current directory into the Docker image
COPY . /app

# Set working directory inside the container
WORKDIR /app

# Install dependencies
RUN yarn install

# Compile TypeScript
RUN yarn build

# Start command as defined in package.json
CMD ["yarn", "start"]
