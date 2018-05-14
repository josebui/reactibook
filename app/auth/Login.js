import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'material-ui'

import { authSuccess, authFail } from './auth.actions'
import Base from '../components/Base'

class LoginContainer extends React.Component {
  render() {
		const onClick = () => {
			this.props.login()
		}

    return (
			<Base>
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
