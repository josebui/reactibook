import { handleActions } from 'redux-actions'
import uuid from 'uuid/v4' 
import _ from 'lodash'

import * as actions from './posts.actions'

const initialState = {
	list: [],
  filters: {},
  filteredList: []
}

const filterList = (list, filters) => {
  const filteredList = list.filter(post => 
    _.every(_.toPairs(filters).map(([key, value]) =>
      post[key] === value
    )) && true
  )
  return filteredList
}

export default handleActions({
  [actions.addPost]: (state, action) => {
    const list = [ ...state.list, {
      ...action.payload,
      id: uuid()
    }]
    const filteredList = filterList(list, state.filters) 
    return ({
      ...state,
      list,
      filteredList
    })
  },
  [actions.removePost]: (state, action) => {
    const id = action.payload
    const list = state.list.filter(post => post.id !== id )
    const filteredList = filterList(list, state.filters) 
    return {
      ...state,
      list,
      filteredList
    }
  },
  [actions.addFilter]: (state, action) => {
    const { key, value } = action.payload
    const filters = {
      ...state.filters,
      [key]: value
    }
    const filteredList = filterList(state.list, filters) 
    return {
      ...state,
      filters,
      filteredList
    }
  }
}, initialState)

