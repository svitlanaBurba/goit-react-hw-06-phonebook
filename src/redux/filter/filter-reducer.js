import {createReducer} from '@reduxjs/toolkit';
import {handleChange} from './filter-actions';

const initialState = '';
const filter = createReducer(initialState, {
  [handleChange]: (state, {payload}) => {
    return payload;
  }
});

// Решение до Redux Toolkit

// const initialState = {
//   filter: ''
// };

// const filterReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case types.GET_FILTERED:
//       return {
//         ...state,
//         payload
//       };

//     default:
//       return state;
//   }
// };

export default filter;
