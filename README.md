# Neocortex

Neocortex is a project with a React frontend and Go backend.

## Project Structure

- `/frontend` - React application built with Vite and TypeScript
- `/backend` - Go server using the Gin web framework

## Getting Started

### Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at http://localhost:5173

### Backend

```bash
cd backend

# Download dependencies
go mod download

# Run the server
go run cmd/server/main.go
```

The backend API will be available at http://localhost:8080

## License

See the LICENSE file for details.
