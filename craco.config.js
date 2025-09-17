module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimize = true;
      return webpackConfig;
    },
  },
};

