# Stage 1: Build Angular App
FROM node:20.17.0 as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy the rest of the source code
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from build stage (replace with your actual dist folder name)
COPY --from=build /app/dist/employee-angular /usr/share/nginx/html

# Optional: custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
