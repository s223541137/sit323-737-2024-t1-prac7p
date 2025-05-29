# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code to the working directory
COPY . .

# Expose the app port (must match your server.js or app.js)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
