import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Base from '../components/Base'
import NewPost from '../posts/NewPost'

const Home = props => {
  return (
    <Base>
      <NewPost />
    </Base>
  )
}

export default Home

