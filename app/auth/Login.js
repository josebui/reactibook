import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'material-ui'

import Base from '../components/Base'

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

const authFail = () => ({
  type: 'AUTH_FAIL'
})

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
    dispatch(push('/'))
  }
}))(LoginContainer)
