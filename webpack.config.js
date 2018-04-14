'use strict'

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const PATHS = require('./config/webpack/webpack.bundle.paths')

// Plugins``
const html = require('./config/webpack/webpack.plugin.html')
const favicon = require('./config/webpack/webpack.plugin.favicon')

// Configs
const development = require('./config/webpack/webpack.config.dev')
const production = require('./config/webpack/webpack.config.prod')

// Common Config
const common = {
  entry: {
    app: PATHS.src,
    // style: [PATHS.style]
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/'
  },
  // resolve: {
  //   root: [
  //     PATHS.src,
  //     PATHS.images
  //   ],
  //   fallback: __dirname,
  //   extensions: ['', '.js', '.styl']
  // },
  devServer: {
    overlay: true,
    quiet: true
  },
  plugins: [
    // https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin
    new CaseSensitivePathsPlugin(),

    // https://www.npmjs.com/package/friendly-errors-webpack-plugin
    new FriendlyErrorsWebpackPlugin(),

    // https://www.npmjs.com/package/webpack-dashboard
    new DashboardPlugin()
  ]
}

// Extended Config
const config = merge(
  common,
  html.setup(PATHS),
  favicon.setup(PATHS)
)

module.exports = function(mode) {
  if (mode === "production") {
    return merge(config, production, { mode });
  }

  return merge(config, development, { mode });
};
