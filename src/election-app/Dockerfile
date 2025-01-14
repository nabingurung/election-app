# Step 1: Build the Angular application
FROM node:22.0.0-alpine AS build
WORKDIR /app
COPY package*.json ./
# RUN npm ci
RUN npm install > npm-install.log
# RUN npm install -g @angular/cli
COPY . .
RUN ngx build --configuration=production

# Step 2: Serve the Angular application using NGINX
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/election-app/browser /usr/share/nginx/html

# Add the entrypoint script
# COPY docker-entrypoint.sh /usr/share/nginx/html/docker-entrypoint.sh
# RUN chmod +x /usr/share/nginx/html/docker-entrypoint.sh

# ENTRYPOINT ["/usr/share/nginx/html/docker-entrypoint.sh"]

# Expose port 80
 EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
