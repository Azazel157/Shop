import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    inputRoot: {
        color: 'white',
        width: '100%',
      },
    
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
})



function SearchTool(props) {
    const { classes } = props;
        return (
            <div>
                <InputBase
                placeholder="Поиск..."
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            </div>
        )
    }

SearchTool.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchTool);