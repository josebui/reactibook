import React from 'react'
import {
	TextField,
	Select,
	MenuItem,
	Button,
	Card,
	CardContent,
	CardActions,
} from 'material-ui'
import { connect } from 'react-redux'

import * as actions from './posts.actions'

const postOptions = [{
  value: 'friends',
  label: 'Friends'
}, {
  value: 'public',
  label: 'Public'
}]

const PostOptions = props => (
	<Select
    value="friends"
    onChange={props.onChange}
	>
    {postOptions.map(option => (
		  <MenuItem value={option.value}>{option.label}</MenuItem>
    ))}
	</Select>
)

class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      options: ''
    }
  }

  render() {
    const { state, props } = this
    const onPublish = () => {
      props.addPost(state)
    }

    const onDescriptionChange = (event) => {
      this.setState({ description: event.target.value })
    }

    const onPostOptionsChange = (event) => {
      this.setState({ options: event.target.value })
    }

    return (
      <Card>
        <CardContent>
          <form>
            <div>
              <TextField
                label="Que esta pasando?"
                multiline
                rows={4}
                onChange={onDescriptionChange}/>      
            </div>
          </form>
        </CardContent>
        <CardActions>
          <PostOptions
            onChange={onPostOptionsChange}/>			
          <Button onClick={onPublish}>Publicar</Button>
        </CardActions>
      </Card>
    )
  }
}

export default connect(null, dispatch => ({
  addPost: post => dispatch(actions.postAdd(post))
}))(NewPost)
