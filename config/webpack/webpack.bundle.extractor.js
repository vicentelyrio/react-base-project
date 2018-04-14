'use strict'

const webpack = require('webpack')

exports.setup = function() {
  return {
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: 'vendor',
        chunks: ['app'],
        minChunks: isVendor
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
      })
    ]
  }
}

const isVendor = ({ resource }) => (
  resource &&
  resource.indexOf('node_modules') >= 0 &&
  resource.match(/\.js$/)
)
