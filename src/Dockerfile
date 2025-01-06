# Step 1: Build the Angular UI
FROM node:18 AS ui-build
WORKDIR /app/ui
COPY election-app/package*.json ./
RUN npm install
COPY election-app/ ./
RUN npm run build --prod

# Step 2: Build the .NET Core API
# Use the official ASP.NET Core runtime as a parent image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS api-build
WORKDIR /app/api
COPY election-service/election-service.csproj ./
RUN dotnet restore
COPY election-service/ ./
RUN dotnet publish -c Release -o /app/publish

# Step 3: Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=api-build /app/publish /app/api
COPY --from=ui-build /app/ui/dist /app/ui

# Serve both Angular and .NET Core Web API
# RUN apt-get update && apt-get install -y nginx
FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports for NGINX and API
EXPOSE 8080
ENV ASPNETCORE_HTTP_PORTS=80
CMD ["nginx", "-g", "daemon off;"] && dotnet /app/api/election-service.dll

## The Dockerfile is divided into three steps: 
    
    # Step 1: Build the Angular UI 
    # Step 2: Build the .NET Core API 
    # Step 3: Create the runtime image 
    
    # The first step uses the  node:18  image to build the Angular UI. It copies the  package.json  file and installs the dependencies. Then, it copies the source code and runs the  npm run build  command to build the Angular application. 
    # The second step uses the  mcr.microsoft.com/dotnet/aspnet:8.0  image to build the .NET Core API. It copies the  .csproj  file and restores the dependencies. Then, it copies the source code and runs the  dotnet publish  command to publish the application. 
    # The third step uses the  mcr.microsoft.com/dotnet/aspnet:8.0  image to create the runtime image. It copies the published .NET Core API from the previous step and the Angular UI from the first step. It installs NGINX and copies the  nginx.conf  file to configure the server. Finally, it exposes the ports for NGINX and the API and starts the NGINX server and the .NET Core API. 
    # The  nginx.conf  file is used to configure the NGINX server. It specifies the location of the Angular UI and the port to listen on.

