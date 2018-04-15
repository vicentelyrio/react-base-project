import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from 'src/layouts/Main'

function renderApplication() {
  const applicationDOMElement = document.getElementById('app')

  const applicationElement = (
    <BrowserRouter>
      <Route component={Main} />
    </BrowserRouter>
  )

  ReactDOM.render(applicationElement, applicationDOMElement)
}

const rootInstance = renderApplication()

if(module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
