'use strict'

const defaultWebpackConfig = require('../webpack.config')

const path = require('path')
const merge = require('webpack-merge')

const paths = require('../config/webpack/bundle.paths')
const loaderStyles = require('../config/webpack/loader.styles')

const PATHS = paths.setup(path.resolve(__dirname, '../'))

module.exports = function(storybookBaseConfig) {
  const alias = {
    resolve: {
      modules: [
        PATHS.src,
        PATHS.fixtures,
        PATHS.storybook
      ],
      alias: {
        src: PATHS.src,
        fixtures: PATHS.fixtures,
        storybook: PATHS.storybook
      }
    }
  }

  return merge(
    storybookBaseConfig,
    alias,
    loaderStyles.setup(PATHS)
  )
}
