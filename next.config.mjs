// next.config.mjs
export default {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/banner-deploy/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/banner-deploy' : '',
};
