import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );
        return (
            <ul>
                {filteredContacts.map(
                    (contact) => <ContactItem key={contact.description}
                                              name={contact.name}
                                              description={contact.description}/>
                )}
            </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

export default ContactList;