const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/banner-deploy/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/banner-deploy' : '',
};

module.exports = nextConfig;
