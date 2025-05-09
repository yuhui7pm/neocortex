/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
