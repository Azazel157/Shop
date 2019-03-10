import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

const Select = (props) => {
    return (
        <List>
            { props.items.map((item, index) => {
                return ( 
                    <div key={index}>
                        <ListItem button>
                        <ListItemText primary={item.name} secondary={item.description} />
                        <Checkbox 
                        checked={item.checked}
                        onChange={ (event, isInputChecked) => props.onChange(isInputChecked, index)}
                        />
                        <Divider />
                        </ListItem>
                    </div>
                )} ) }
        </List> 
    )
}

export default Select;