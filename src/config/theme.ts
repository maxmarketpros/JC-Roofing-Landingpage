// TypeScript mirror of CSS design tokens for use in JS contexts
// The source of truth is globals.css — keep these in sync when rebranding

export const themeTokens = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a5f",
  },
  foreground: "#1a1a2e",
  muted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f8fafc",
  background: "#ffffff",
} as const;
