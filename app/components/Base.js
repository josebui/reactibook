import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui'

const Base = props => {
  const contentStyle = {
    margin: 10
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Reactibook
          </Typography>
        </Toolbar>
      </AppBar>
      <div style= {contentStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default Base
