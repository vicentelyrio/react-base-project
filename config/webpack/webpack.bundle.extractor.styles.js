'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.setup = function(PATHS) {
  const plugin = new ExtractTextPlugin({
    filename: '[name].[hash].css',
  })

  const autoprefix = () => ({
    loader: 'postcss-loader',
    options: {
      plugins() {
        return [
          require('autoprefixer')()
        ]
      }
    }
  })

  return {
    module: {
      rules: [
        {
          test: /\.styl/,
          include: PATHS.app,
          exclude: /node_modules/,
          loader: plugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!stylus-loader'
          })
        },
        {
          test: /\.css$/,
          include: PATHS.app,
          exclude: /node_modules/,
          loader: plugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [ plugin ]
  }
}
