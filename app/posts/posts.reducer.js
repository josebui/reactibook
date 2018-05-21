import { handleActions } from 'redux-actions'
import uuid from 'uuid/v4' 
import _ from 'lodash'
import getUrls from 'get-urls'
import isImage from 'is-image'

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

const getImages = text => {
  const urls = getUrls(text)
  const images = Array.from(urls).filter(url => isImage(url))
  return images
}

export default handleActions({
  [actions.addPost]: (state, action) => {
    const post = action.payload
    const images = getImages(post.description)
    const list = [ ...state.list, {
      ...post,
      id: uuid(),
      images
    }]
    const filteredList = filterList(list, state.filters) 
    return ({
      ...state,
      list,
      filteredList
    })
  },
  [actions.updatePost]: (state, action) => {
    const newData = action.payload
    const list = state.list.map(post => {
      if (post.id !== newData.id) {
        return post
      }
      return newData
    })
    
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

