/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_BLOCKFROST_PROJECT_ID: process.env.BLOCKFROST_PROJECT,
    REACT_APP_SUPABASE_URL: process.env.SUPABASE_URL,
    REACT_APP_SUPABASE_ANON_PUBLIC: process.env.SUPABASE_ANON_PUBLIC,
  },
  reactStrictMode: true,

  swcMinify: false,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["ipfs.io"],
    unoptimized: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // experimental: {
  //   layers: true,
  // },
};
