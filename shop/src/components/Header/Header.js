import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '../Search/Search';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const div = styled.div `
  div.root {
    width: '100%',
  },

  div.grow {
    flexGrow: 1,
  },

  Typography.title {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  div.search {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  ,
`

class Header extends Component {
  constructor() {
    super()
    this.state = {
      filterText: '',
      itemsList: ''
    }
  }
  
  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm});
  }
  
  render() {
    return (
      <div className='root'>
        <AppBar position="static">
          <Toolbar>
            <Sidebar />
            <Typography className='title' variant="h6" color="inherit" noWrap>
              Магазин
            </Typography>
            <div className='grow' />
            <div className='search'>
            <div>
              </div>
              <Search 
              filterText={this.state.filterText}
              onUserInput={this.handleUserInput.bind(this)}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;