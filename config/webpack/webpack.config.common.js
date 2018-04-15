'use strict'

const path = require('path')
const merge = require('webpack-merge')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const html = require('./webpack.plugin.html')
const favicon = require('./webpack.plugin.favicon')

const loaderImages = require('./webpack.loader.images')
const loaderSvgs = require('./webpack.loader.svgs')
const loaderJavascript = require('./webpack.loader.javascript')

exports.setup = function(PATHS) {
  const common = {
    entry: {
      app: PATHS.src
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      modules: [
        PATHS.src,
        PATHS.fixtures,
        'node_modules'
      ],
      alias: {
        web: PATHS.src,
        fixtures: PATHS.fixtures
      },
      descriptionFiles: ['package.json'],
      extensions: ['.js', '.styl']
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
      new CaseSensitivePathsPlugin(),
      new DashboardPlugin(),
      new ErrorOverlayPlugin()
    ],
    stats: {
      assets: true,
      cached: true,
      cachedAssets: true,
      children: true,
      chunks: true,
      chunkModules: true,
      chunkOrigins: true,
      colors: true,
      depth: true,
      entrypoints: true,
      errors: true,
      errorDetails: true,
      hash: true,
      maxModules: 15,
      modules: true,
      moduleTrace: true,
      performance: true,
      providedExports: false,
      publicPath: true,
      reasons: true,
      source: true,
      timings: true,
      version: true,
      warnings: true
    }
  }

  return merge(
    common,
    html.setup(PATHS),
    loaderSvgs.setup(PATHS),
    loaderImages.setup(PATHS),
    loaderJavascript.setup(PATHS)
  )
}
