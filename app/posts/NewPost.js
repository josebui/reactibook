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
	>
    {postOptions.map(option => (
		  <MenuItem value={option.value}>{option.label}</MenuItem>
    ))}
	</Select>
)

const NewPost = props => {

  const onPublish = () => {
  
  }

  return (
		<Card>
			<CardContent>
				<form>
					<div>
						<TextField label="Que esta pasando?" multiline rows={4} />      
					</div>
				</form>
			</CardContent>
			<CardActions>
				<PostOptions />			
				<Button>Publicar</Button>
			</CardActions>
		</Card>
  )
}

export default connect(null, dispatch => ({
  addPost: post => dispatch(actions.postAdd(post))
}))(NewPost)
