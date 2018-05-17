import React from 'react'
import {
	Button,
	Card,
	CardContent,
	CardActions,
  Typography,
} from 'material-ui'

import PostForm from './PostForm'


const PostView = props => {
    const onRemove = () => {
      if (!confirm(`Deseas eleminar este post: ${props.description}`)) {
        return
      }
      props.removePost(props.id)
    }
    const onUpdate = () => {
      props.onChangeMode('edit')
    }
    return (
      <Card style={{ marginTop: 10 }}>
        <CardContent>
          <Typography color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onRemove}>Borrar</Button>
          <Button onClick={onUpdate}>Editar</Button>
        </CardActions>
      </Card>
    )
}

const PostEdit = props => {
  const { id, description, visibility } = props
  return (
    <PostForm
      data={{ id, description, visibility }}
      cancelEnabled={true}
      onCancel={() => props.onChangeMode('view')}
      saveLabel="Guardar"
      savePost={props.updatePost}/> 
  )
}

class Post  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'view'
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.mode !== 'view') {
      this.setState({ mode: 'view' })
    }
  }
  render() {
    const { props, state } = this

    const onChangeMode = mode => this.setState({ mode })

    if (state.mode === 'view') {
      return (
        <PostView {...props}
          onChangeMode={onChangeMode}/>
      )
    }

    if (state.mode === 'edit') {
      return (
        <PostEdit {...props}
          onChangeMode={onChangeMode}
          ediPost={props.updatePost}
        />
      )
    }
  }
}

export default Post
