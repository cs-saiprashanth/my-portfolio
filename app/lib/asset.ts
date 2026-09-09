const isProd = process.env.NODE_ENV === "production";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/my-portfolio" : "");

/**
 * Returns the correct asset path accounting for GitHub Pages subpath deployment.
 */
export const getAssetPath = (path: string): string => {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const assetPath = cleanPath.startsWith("/images/") ? cleanPath : `/images${cleanPath}`;
  return `${basePath}${assetPath}`;
};
