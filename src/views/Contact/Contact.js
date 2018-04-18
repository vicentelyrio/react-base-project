import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

class Contact extends Component {
  render() {
    return (
      <div>
        <h3><FormattedMessage id="contact" defaultMessage="Contact" /></h3>
      </div>
    )
  }
}

Contact.propTypes = {
}

export default Contact
