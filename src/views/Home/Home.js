import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

class Home extends Component {
  render() {
    return (
      <div>
        <h3><FormattedMessage id="home" defaultMessage="Home" /></h3>
      </div>
    )
  }
}

Home.propTypes = {
}

export default Home
