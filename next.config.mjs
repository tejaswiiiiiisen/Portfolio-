/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true' || true;
const basePath = isGithubPages ? '/Portfolio-' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
