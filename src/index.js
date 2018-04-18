import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import queryString from 'query-string'

import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import es from 'react-intl/locale-data/es'

import Main from 'src/layouts/Main'

const { language, languages, userLanguage } = navigator
const userLocale = (languages && languages[0]) || language || userLanguage || 'pt-BR'
const locale = queryString.parse(location.search).lang || userLocale
const normalizedLocale = locale.replace('-', '_')

const langParts = locale.replace('-', '_').split('_')
const lang = langParts[0]

addLocaleData([...en, ...pt, ...es])

function renderApplication() {
  const messages = require(`src/assets/locales/${normalizedLocale || lang}.json`)
  const applicationDOMElement = document.getElementById('app')

  const applicationElement = (
    <IntlProvider locale={locale} key={locale} messages={messages}>
      <BrowserRouter>
        <Route component={Main} />
      </BrowserRouter>
    </IntlProvider>
  )

  ReactDOM.render(applicationElement, applicationDOMElement)
}

const rootInstance = renderApplication()

if(module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
