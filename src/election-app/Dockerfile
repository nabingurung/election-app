# Step 1: Build the Angular application
FROM node:18.19.0 AS build
WORKDIR /app
COPY package*.json ./
# RUN npm ci
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN ng build --configuration=production

# Step 2: Serve the Angular application using NGINX
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/election-app/browser /usr/share/nginx/html

# Add the entrypoint script
# COPY docker-entrypoint.sh /usr/share/nginx/html/docker-entrypoint.sh
# RUN chmod +x /usr/share/nginx/html/docker-entrypoint.sh

# ENTRYPOINT ["/usr/share/nginx/html/docker-entrypoint.sh"]

# Expose port 80
 EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
