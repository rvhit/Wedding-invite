// Prefix public asset paths with Vite's base URL so they resolve at any deploy path.
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
