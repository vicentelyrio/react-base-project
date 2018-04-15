'use strict'

const merge = require('webpack-merge')

const cleaner = require('./webpack.bundle.cleaner')
const revision = require('./webpack.bundle.revision')
const minifier = require('./webpack.bundle.minifier')
const stylesExtractor = require('./webpack.bundle.extractor.styles')
const split = require('./webpack.bundle.split')
const manifest = require('./webpack.bundle.manifest')

exports.setup = function(PATHS) {
  return merge(
    cleaner.setup(PATHS),
    revision.setup(PATHS),
    minifier.setup(PATHS),
    stylesExtractor.setup(PATHS),
    split.setup(PATHS),
    manifest.setup(PATHS)
  )
}
