import React from 'react'
import {
	Button,
	Card,
	CardContent,
	CardActions,
} from 'material-ui'
import { connect } from 'react-redux'

import * as actions from './posts.actions'
import * as constants from './posts.constants'
import Post from './Post'


const Filters = props => {
  const onVisibilityChange = option => () => {
    props.addFilter({
      key: 'visibility',
      value: option.value
    })
  }
  const visibilityFilters = constants.VISIBILITY.map(option => (
    <Button onClick={onVisibilityChange(option)} >{option.label}</Button>
  ))
  return (
    <div>
      {visibilityFilters}
    </div>
  )
}

class Posts  extends React.Component {
  render() {
    const { props } = this
    return (
      <div>
        <Filters
          addFilter={props.addFilter}
        />
        {props.filteredList.map(post => (
          <Post {...post} 
            removePost={props.removePost}
            updatePost={props.updatePost}
          />
        ))}
      </div>
    )
  }
}

export default connect(state => ({
  filteredList: state.posts.filteredList
}), dispatch => ({
  removePost: postId => dispatch(actions.removePost(postId)),
  updatePost: post => dispatch(actions.updatePost(post)),
  addFilter: filter => dispatch(actions.addFilter(filter))
}))(Posts)
