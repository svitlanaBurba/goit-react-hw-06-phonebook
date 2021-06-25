import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import ContactListItem from '../contactListItem/ContactListItem';
import {connect} from 'react-redux';
import {deleteContact} from '../../redux/contacts/contacts-actions';

const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={uuid()}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

const getFilteredContacts = (allContacts, filter) => {
  // console.log('getFilteredContacts');
  // console.dir(filter);

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};
const mapStateToProps = state => {
  // console.log('ContactList-mapStateToProps');
  // console.dir(state);
  return {
    contacts: getFilteredContacts(state.contacts.contacts, state.filter.filter)
  };
};

const mapDispatchToProps = {deleteContact};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
