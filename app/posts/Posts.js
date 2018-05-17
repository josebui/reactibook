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


const Post = props => {
  const onRemove = () => {
    if (!confirm(`Deseas eleminar este post: ${props.description}`)) {
      return
    }
    props.removePost(props.id)
  }
  return (
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        {props.description}
      </CardContent>
      <CardActions>
        <Button onClick={onRemove}>Borrar</Button>
      </CardActions>
    </Card>
  )
}

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
  addFilter: filter => dispatch(actions.addFilter(filter))
}))(Posts)
