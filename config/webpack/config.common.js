'use strict'

const path = require('path')
const merge = require('webpack-merge')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const Jarvis = require('webpack-jarvis')

const html = require('./plugin.html')
const favicon = require('./plugin.favicon')

const loaderImages = require('./loader.images')
const loaderSvgs = require('./loader.svgs')
const loaderJavascript = require('./loader.javascript')

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
        src: PATHS.src,
        fixtures: PATHS.fixtures
      },
      descriptionFiles: ['package.json'],
      extensions: ['.js', '.styl']
    },
    plugins: [
      new ErrorOverlayPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new DuplicatePackageCheckerPlugin(),
      new CaseSensitivePathsPlugin(),
      new Jarvis(),
      new DashboardPlugin()
    ]
  }

  return merge(
    common,
    html.setup(PATHS),
    favicon.setup(PATHS),
    loaderSvgs.setup(PATHS),
    loaderImages.setup(PATHS),
    loaderJavascript.setup(PATHS),
    // loaderJson.setup(PATHS)
  )
}
