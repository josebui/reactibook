import { handleActions } from 'redux-actions'

import * as actions from './auth.actions'

const initialState = {
	isAuthenticated: false
}

export default handleActions({
  [actions.authSuccess]: (state, action) => ({
    ...state,
    isAuthenticated: true
  }),
  [actions.authFail]: (state, action) => ({
    ...state,
    isAuthenticated: false
  })
}, initialState)

