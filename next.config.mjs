/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/andrelago13.github.io",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
