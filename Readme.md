# Template Project

A multi-stack monorepo featuring a microservices-inspired architecture with multiple frontend options (Angular, Vue, Blazor) and a .NET 10 backend.

## 🚀 Overview

This repository serves as a comprehensive template for building modern web applications. It includes:
- **Backend**: ASP.NET Core services with Entity Framework Core and SignalR.
- **Frontends**:
  - **Angular** (v21)
  - **Vue** (v3 with Vite)
  - **Blazor WASM** (.NET 10)
- **Database**: PostgreSQL with PostGIS.
- **Infrastructure**: Docker-ready with integrated CI/CD scripts.

---

## 🛠️ Tech Stack

- **Language**: C# 14, TypeScript, JavaScript
- **Frameworks**: .NET 10 (ASP.NET Core), Angular 21, Vue 3, Node.js
- **Persistence**: PostgreSQL (PostGIS), Cosmos DB (Configured in Identity)
- **Package Managers**: NuGet (C#), NPM (JS/TS)
- **Testing**: xUnit/MSTest, Coverlet, Vitest (Angular)
- **Containerization**: Docker

---

## 📋 Requirements

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Docker & Docker Compose](https://www.docker.com/products/docker-desktop)
- [PostgreSQL](https://www.postgresql.org/) (If running locally without Docker)
- [dotnet-ef tool](https://learn.microsoft.com/en-us/ef/core/cli/dotnet) (`dotnet tool install --global dotnet-ef`)

---

## 🚦 Getting Started

### 1. Database Setup
The project uses PostgreSQL. You can quickly spin up a container using the provided script:
```bash
./scripts.sh # Uncomment rebuild_postgres_server inside the script if needed
```

### 2. Initialize Solution
Restore tools and set up local secrets:
```bash
./scripts.sh # Use solution_initilize function
```
*Note: You may need to manually update `scripts.sh` to uncomment the desired initialization steps.*

### 3. Running Services
Each major service can be run via dotnet:
```bash
dotnet run --project Product.Api/Product.Api.csproj
dotnet run --project Auth/Auth.csproj
dotnet run --project Identity/Identity.csproj
```

### 4. Running Frontends
- **Angular**:
  ```bash
  cd web.angular && npm install && npm start
  ```
- **Vue**:
  ```bash
  cd web.vue && npm install && npm run dev
  ```
- **Blazor**:
  ```bash
  dotnet run --project Web.BlazorWasm/Web.BlazorWasm.csproj
  ```

---

## 📜 Scripts (`scripts.sh`)

The `scripts.sh` file contains several utility functions:
- `rebuild_postgres_server`: Recreates the PostgreSQL container with PostGIS.
- `solution_initilize`: Restores dotnet tools, sets user secrets, and installs npm packages for Vue.
- `update_dotnet_packages`: Finds and updates all outdated NuGet packages in the solution.
- `recreate_database <dbname>`: Drops and recreates a PostgreSQL database.
- `update_database <project> <startup_project>`: Adds an initial EF migration and updates the database.
- `run_test <test_project>`: Runs tests with coverage reporting.
- `publish_docker <dockerfile> <tag>`: Builds and pushes Docker images.

---

## 🐳 Docker
Build the API and Job services:
```bash
docker build --tag product.api --file Product.Api/Dockerfile .
docker build --tag product.job --file Product.Job/Dockerfile .
```

---

## 🧪 Testing

### Backend Tests
Run all tests or specific projects:
```bash
dotnet test
./scripts.sh # Use run_test function for specific projects (e.g., Auth.Tests)
```

### Frontend Tests
- **Angular**: `npm run test` inside `web.angular`.

---

## 📂 Project Structure

- `Auth/`, `Identity/`, `Product/`: Core domain services.
- `Product.Api/`, `Product.Job/`: API and Background Job entry points for the Product service.
- `Base/`: Shared libraries, base repositories, and extensions.
- `Web.BlazorWasm/`, `web.angular/`, `web.vue/`: Frontend applications.
- `web.server/`: Utility Node.js server.
- `HubClient/`: SignalR client implementation.
- `devops/`: Infrastructure and deployment configurations.
- `ai/`: TODO: Document contents of AI directory.

---

## 🔐 Environment Variables & Secrets

- `postgres_credential`: Connection string for PostgreSQL (Set via `dotnet user-secrets`).
- `AppSettings:Cosmos:Key`: Azure Cosmos DB key (Configured in `Identity`).
- See `appsettings.json` in each service for more configurations.

---

## ⚖️ License

Distributed under the **MIT License**. See `License` file for details.
Copyright (c) 2025 Company.
