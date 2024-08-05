// next.config.js
const isProd = process.env.NODE_ENV === 'production'

export default {
  assetPrefix: isProd ? '/banner-deploy/' : '',
  basePath: isProd ? '/banner-deploy' : '',
}
