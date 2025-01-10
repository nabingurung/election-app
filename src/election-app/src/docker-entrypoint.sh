#!/bin/sh

echo "Replacing environment variables in Angular app..."

# Use environment variables to replace placeholders in environment.prod.js
sed -i "s|AWS_REGION|$AWS_REGION|g" /usr/share/nginx/html/assets/environment.prod.js
sed -i "s|AWS_USER_POOL_ID|$AWS_USER_POOL_ID|g" /usr/share/nginx/html/assets/environment.prod.js
sed -i "s|AWS_USER_POOL_WEB_CLIENT_ID|$AWS_USER_POOL_WEB_CLIENT_ID|g" /usr/share/nginx/html/assets/environment.prod.js

echo "Starting Nginx server..."
exec "$@"
