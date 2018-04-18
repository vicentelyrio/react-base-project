import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import Home from 'src/views/Home'
import Contact from 'src/views/Contact'

class Main extends Component {
  render() {
    const { match: { url } } = this.props

    return (
      <div>
        <h4><FormattedMessage id="hello" defaultMessage="Hello" /> {this.props.name}</h4>
        <Link to="/home"><FormattedMessage id="home" defaultMessage="Home" /></Link>
        <Link to="/contact"><FormattedMessage id="contact" defaultMessage="Contact" /></Link>
        <Switch key="mainRoutes">
          <Route path={'/home'} key="home" component={Home} />
          <Route path={'/contact'} key="contact" component={Contact} />
          <Redirect from={'/'} to={'/home'} />
        </Switch>
      </div>
    )
  }
}

Main.propTypes = {
  name: PropTypes.string,
  match: PropTypes.object
}

export default Main
