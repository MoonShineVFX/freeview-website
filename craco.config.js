module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules\/(?!(multi-views-dumb-player)\/).*/,
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      })

      return webpackConfig;
    }
  }
};
