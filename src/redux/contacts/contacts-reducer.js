import {v4 as uuid} from 'uuid';
import {createReducer} from '@reduxjs/toolkit';
import {addNewContact, deleteContact} from './contacts-actions';

const initialState = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]
};

const contactsReducer = createReducer(initialState, {
  [addNewContact]: (state, {type, payload}) => ({
    ...state,
    contacts: [...state.contacts, {id: uuid(), ...payload}]
  }),
  [deleteContact]: (state, {type, payload}) => ({
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== payload)
  })
});

// Решение до Redux Toolkit
// const contactsReducer = (state = initialState, {type, payload}) => {
//   console.log({type, payload});
//   switch (type) {
// case types.ADD:
//   return {
//     ...state,
//     contacts: [...state.contacts, {id: uuid(), ...payload}]
//   };

//     case types.DELETE:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload)
//       };

//     default:
//       console.log(state);
//       return state;
//   }
// };

export default contactsReducer;
