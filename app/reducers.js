import { combineReducers } from 'redux'

import auth from './auth/auth.reducer'
import posts from './posts/posts.reducer'


export default combineReducers({
  auth,
  posts,
})
