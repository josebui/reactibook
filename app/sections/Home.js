import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Base from '../components/Base'
import NewPost from '../posts/NewPost'
import Posts from '../posts/Posts'


const Home = props => {
  return (
    <Base>
      <NewPost />
      <Posts />
    </Base>
  )
}

export default Home

