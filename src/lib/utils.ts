import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolve a public asset path against Vite's base URL so it works both at the
 * domain root and under a sub-path (e.g. GitHub Pages: /portfolio/).
 * External URLs (http/https) are returned unchanged.
 */
export function asset(p: string): string {
  if (!p || /^https?:\/\//.test(p) || p.startsWith("mailto:") || p.startsWith("tel:")) return p;
  return import.meta.env.BASE_URL + p.replace(/^\//, "");
}
