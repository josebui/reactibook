import React from 'react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'


class PrivateRouteContainer extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
            <Login />
          )
        }
      />
    )
  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRouteContainer)
