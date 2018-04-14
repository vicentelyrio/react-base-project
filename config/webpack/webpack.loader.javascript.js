'use strict'

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    module: {
      rules: [
        {
          test: /\.js?$/,
          include: [PATHS.web, PATHS.factories],
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    },
    'plugins': [
      new LodashModuleReplacementPlugin()
    ]
  }
}
