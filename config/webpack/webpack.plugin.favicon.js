  // https://www.npmjs.com/package/favicons-webpack-plugin
'use strict'

const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    plugins: [
      new FaviconsWebpackPlugin(path.resolve(PATHS.images, 'logo.png')),
    ]
  }
}
