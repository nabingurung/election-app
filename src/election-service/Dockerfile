# Use the .NET SDK image for the build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY election-service.csproj ./
RUN dotnet restore

# Copy the remaining files and build the application
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# Use the ASP.NET Core runtime image for the runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .


# Expose the port the application will run on
EXPOSE 8080
ENV ASPNETCORE_HTTP_PORTS=80;443

# Set the entry point for the container
ENTRYPOINT ["dotnet", "election-service.dll"]