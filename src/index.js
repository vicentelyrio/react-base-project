import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class HelloMessage extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string
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
