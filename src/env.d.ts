/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RAPIDPI_Key: string;
  readonly RAPIDAPI_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
