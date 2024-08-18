/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "drive.google.com",
      "orris-next.vercel.app",
      "live.staticflickr.com",
      "flic.kr",
      "cms.orrisarena.com",
    ],
    remotePatterns: [
      {
        hostname: "cms.orrisarena.com/api",
      },
    ],
  },
};

export default nextConfig;
