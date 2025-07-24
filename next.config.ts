/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms-virtueserve1.onrender.com",
        pathname: "/uploads/**", // ✅ Corrected for Render/Strapi uploads
      },
      {
        protocol: "https",
        hostname: "xolsmduhuujgmdeyfabp.supabase.co", // ✅ Replace with actual Supabase project domain
        pathname: "/storage/v1/object/public/**", // ✅ All public files
      },
    ],
  },
};

module.exports = nextConfig;
