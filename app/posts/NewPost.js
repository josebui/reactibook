import React from 'react'
import { connect } from 'react-redux'

import * as actions from './posts.actions'
import PostForm from './PostForm'


const NewPost = props => {
  return (
    <PostForm
      savePost={props.addPost}/> 
  )
}


export default connect(null, dispatch => ({
  addPost: post => dispatch(actions.addPost(post))
}))(NewPost)
