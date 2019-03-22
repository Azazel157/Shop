import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '../Search/Search';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import ContactList from '../Contact/ContactList';
import PropTypes from 'prop-types';

const div = styled.div `
  .root {
    width: '100%';
  }
  .grow {
    flexGrow: 1,
  }
  .title {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  }
  Typography.search {
    position: 'relative';
    borderRadius: theme.shape.borderRadius;
    backgroundColor: fade(theme.palette.common.white, 0.15);
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25);
    }
    marginLeft: 0;
    width: '100%';
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit;
      width: 'auto';
    }
`

class Header extends Component {
  constructor() {
    super()

    this.state = {
      filterText: '',
      contacts: []
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
              <ContactList 
                filterText={this.state.filterText}
                contacts={this.props.contacts}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default Header;