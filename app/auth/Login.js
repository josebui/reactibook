import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button, FormControl, InputLabel, Input, FormHelperText } from 'material-ui'
import _ from 'lodash/fp'

import { authSuccess, authFail } from './auth.actions'
import Base from '../components/Base'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
      data: {
        email: '',
        passwrod: ''
      }
    }
  }
  validate() {
    const { data } = this.state
    const validateEmail = () => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(re.test(data.email.toLowerCase())) {
        return []
      }
      return ['Ingresa un email valido']
    }
    const validateNotEmpty = field => {
      const value = data[field]
      if (!_.isEmpty(value)) {
        return []
      }
      return [`El campo ${field} es requerido`]
    }

    const errors = {
      email: [
        ...validateEmail(),
        ...validateNotEmpty('email')
      ],
      password: validateNotEmpty('password')
    }

    this.setState({ errors })
    return errors
  }
  render() {
    const { state } = this
    const onClick = () => {
      const errors = this.validate()

      const hasErrors = _.flow(
        _.toPairs,
        _.map(([field, value]) => !_.isEmpty(value)),
        _.some(Boolean)
      )(errors)
      
      if (hasErrors) {
        return
      }
      this.props.login()
    }

    const onFieldChange = field => event => {
      this.setState({
        data: {
          ...state.data,
          [field]: event.target.value
        }
      })
    }

    const hasError = field => !_.isEmpty(state.errors[field])
    const getError = field => state.errors[field].join(', ')
    const getErrorComponent = field => {
      return hasError(field)
        ? <FormHelperText>{getError(field)}</FormHelperText>
        : null
    }

    return (
      <Base>
        <div>
          <FormControl error={hasError('email')}>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              value={state.data.email}
              onChange={onFieldChange('email')} />
            {getErrorComponent('email')}
          </FormControl>
        </div>
        <div>
          <FormControl error={hasError('password')}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={state.data.password}
              onChange={onFieldChange('password')} />
            {getErrorComponent('password')}
          </FormControl>
        </div>
        <Button variant="outlined" onClick={onClick} size="large">
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
}))(Login)
