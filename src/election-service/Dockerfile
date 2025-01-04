# Use the official ASP.NET Core runtime as a parent image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 8080
EXPOSE 443

# Use the .NET Core SDK as a build environment
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["election-service.csproj", "./"]
RUN dotnet restore "election-service.csproj"

# Copy the rest of the application code
COPY . .
WORKDIR "/src/"

# Build the application
RUN dotnet build "election-service.csproj" -c Release -o /app/build

# Publish the application
RUN dotnet publish "election-service.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Use the runtime image for the final stage
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

# Set the entry point for the container
ENTRYPOINT ["dotnet", "election-service.dll"]

