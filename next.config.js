const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
      {
        protocol:'https',
        hostname:'**.googleusercontent.com',
      },
    ],
  },
  
};

module.exports = nextConfig;
