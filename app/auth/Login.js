import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button, FormControl, InputLabel, Input, FormHelperText } from 'material-ui'

import { authSuccess, authFail } from './auth.actions'
import Base from '../components/Base'

class LoginContainer extends React.Component {
  render() {
    const onClick = () => {
      this.props.login()
	}

    return (
      <Base>
        <FormControl error aria-describedby="name-error-text">
          <InputLabel htmlFor="name-error">Name</InputLabel>
          <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText id="name-error-text">Error</FormHelperText>
        </FormControl>
        <Button onClick={onClick} size="large">
          Login
        </Button>
  	  </Base>
    )
  }
}

export default connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess())
  }
}))(LoginContainer)
