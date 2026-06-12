/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve the original /public images directly as plain <img> (no /_next/image
    // optimizer). This makes every image work on ANY host — static export,
    // shared hosting, CDN — and in every browser, with no sharp/AVIF dependency.
    // The source JPEGs are already web-sized, so quality/weight stay fine.
    unoptimized: true,
  },
};

export default nextConfig;
