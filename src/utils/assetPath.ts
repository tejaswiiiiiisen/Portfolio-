/**
 * Resolves static asset paths with Next.js basePath support (e.g. GitHub Pages /Portfolio-)
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path?: string | null): string {
  if (!path) return "";
  // Return external links, data URIs, or anchor links as-is
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("#") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Prevent double prefixing
  if (basePath && (cleanPath === basePath || cleanPath.startsWith(`${basePath}/`))) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}

export default asset;
