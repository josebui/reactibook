import { handleActions } from 'redux-actions'

import * as actions from './posts.actions'

const initialState = {
	list: []
}

export default handleActions({
  [actions.postAddSuccess]: (state, action) => ({
    ...state,
    list: [ ...state.list, action.payload ]
  })
}, initialState)

