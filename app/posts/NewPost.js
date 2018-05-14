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


const PostOptions = props => (
	<Select
		value=""
		inputProps={{
			name: 'age',
			id: 'age-simple',
		}}
	>
		<MenuItem value="">
			<em>None</em>
		</MenuItem>
		<MenuItem value={10}>Ten</MenuItem>
		<MenuItem value={20}>Twenty</MenuItem>
		<MenuItem value={30}>Thirty</MenuItem>
	</Select>
)

const NewPost = props => {
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

export default NewPost
