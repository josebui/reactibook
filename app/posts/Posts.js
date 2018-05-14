import React from 'react'
import {
	Button,
	Card,
	CardContent,
	CardActions,
} from 'material-ui'
import { connect } from 'react-redux'

import * as actions from './posts.actions'

const Post = props => {
  return (
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        {props.description}
      </CardContent>
      <CardActions>
        <Button>Borrar</Button>
      </CardActions>
    </Card>
  )
}

class Posts  extends React.Component {
  render() {
    const { props } = this
    return (
      <div>
        {props.list.map(post => (
          <Post {...post} />
        ))}
      </div>
    )
  }
}

export default connect(state => ({
  list: state.posts.list
}))(Posts)
