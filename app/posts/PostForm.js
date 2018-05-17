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
import _ from 'lodash'

import * as actions from './posts.actions'
import * as constants from './posts.constants'


const VisibilityOptions = props => (
	<Select
    value={props.value}
    onChange={props.onChange}
	>
    {constants.VISIBILITY.map(option => (
		  <MenuItem value={option.value}>{option.label}</MenuItem>
    ))}
	</Select>
)

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        description: '',
        visibility: 'friends',
        ...props.data
      },
      errors: {
        description: null,
        visibility: null
      }
    }
  }

  validate() {
    const { data, errors } = this.state
    const { description } = data

    const newErrors = {
        description: null,
        visibility: null
    }
    if (!description) {
      newErrors.description = 'Ingresa una descripcion'
    }

    this.setState({ errors: newErrors })

    return newErrors
  }

  render() {
    const { state, props } = this
    const { errors, data } = state
    const onPublish = () => {
      const errors = this.validate()
      if (_.some(errors)) {
        return
      }
      props.savePost(data)
      this.setState({
        data: {
          description: '',
          visibility: 'friends'
        }
      })
    }

    const onDescriptionChange = (event) => {
      this.setState({
        data: {
          ...state.data,
          description: event.target.value
        }
      })
    }

    const onVisibilityChange = (event) => {
      this.setState({
        data: {
          ...state.data,
          visibility: event.target.value
        }
      })
    }

    return (
      <Card>
        <CardContent>
          <form>
            <div>
              <TextField
                label="Que esta pasando?"
                value={state.data.description}
                multiline
                rows={4}
                error={!_.isEmpty(errors) && errors.description}
                onChange={onDescriptionChange}/>      
            </div>
          </form>
        </CardContent>
        <CardActions>
          <VisibilityOptions
            value={state.data.visibility}
            onChange={onVisibilityChange}/>			
          <Button onClick={onPublish}>Publicar</Button>
          {
            props.cancelEnabled
              ? <Button onClick={props.onCancel}>Cancelar</Button>
              : null
          }
        </CardActions>
      </Card>
    )
  }
}

export default PostForm
