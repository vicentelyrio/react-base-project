import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}

const renderApplication = () => {
  const applicationDOMElement = document.getElementById('app')
  const applicationElement = (
    <HelloMessage name="Fulano Taylor" />
  )

  ReactDOM.render(applicationElement, applicationDOMElement)
}

const rootInstance = renderApplication()

if(module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
