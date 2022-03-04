const webpack = require('webpack');
/**
 * @type {import('webpack').Configuration[]}
 */
module.exports = [
  {
    name: "USE AXIOS compilation",
    mode: 'development',
    entry: {
      'with-axios': './src/include-axios-base-on-env.js'
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        USE_AXIOS: true
      })
    ],
  },
  {
    name: "do not USE AXIOS compilation",
    mode: 'development',
    entry: {
      'without-axios': './src/include-axios-base-on-env.js'
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        USE_AXIOS: false
      })
    ]
  }

];
