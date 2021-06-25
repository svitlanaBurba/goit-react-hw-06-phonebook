import {createAction} from '@reduxjs/toolkit';

export const addNewContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

// Решение до Redux Toolkit

// export const addNewContact = payload => ({
//   type: types.ADD,
//   payload
// });

// export const deleteContact = payload => ({
//   type: types.DELETE,
//   payload
// });
