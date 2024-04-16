/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
      { protocol: "https", hostname: "github.com", pathname: "**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "**" },
      { protocol: "https", hostname: "i.scdn.co", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
