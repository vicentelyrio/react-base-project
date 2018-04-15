'use strict'

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js'
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin()
      ]
    }
  }
}
