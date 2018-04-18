import { configure } from '@storybook/react'

console.log(configure);

import '../src/styles/index.styl'
import './storybook.styl'

const requires = require.context('../src', true, /storybook\.js$/)
const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module)
