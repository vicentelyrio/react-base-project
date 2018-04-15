'use strict'

const merge = require('webpack-merge')

const cleaner = require('./bundle.cleaner')
const revision = require('./bundle.revision')
const minifier = require('./bundle.minifier')
const stylesExtractor = require('./bundle.extractor.styles')
const split = require('./bundle.split')
const manifest = require('./bundle.manifest')

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
