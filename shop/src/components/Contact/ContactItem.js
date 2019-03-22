import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.description}</li>
    }
}
 
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ContactItem;