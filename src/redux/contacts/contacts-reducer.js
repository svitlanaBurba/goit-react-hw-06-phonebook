import {createReducer} from '@reduxjs/toolkit';
import {addNewContact, deleteContact} from './contacts-actions';

const initialState = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
];

const contacts = createReducer(initialState, {
  [addNewContact]: (state, {payload}) => [...state, payload],
  [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload)
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

export default contacts;
