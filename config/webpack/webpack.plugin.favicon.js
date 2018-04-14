// https://www.npmjs.com/package/favicons-webpack-plugin
'use strict'

const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: path.resolve(PATHS.images, 'logo.png'),
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: true
        }
      })
    ]
  }
}
