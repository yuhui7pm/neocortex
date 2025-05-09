# Neocortex Frontend

This is the React frontend for the Neocortex project.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes
are pushed to the main branch. The deployment process is handled by GitHub
Actions.

### Manual Deployment

To manually trigger a deployment, you can:

1. Go to the GitHub repository
2. Navigate to the Actions tab
3. Select the "Deploy Frontend to GitHub Pages" workflow
4. Click "Run workflow"

### Deployment Configuration

The deployment configuration is located in:

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.ts` - Base path configuration for GitHub Pages

## Added for testing husky hooks
