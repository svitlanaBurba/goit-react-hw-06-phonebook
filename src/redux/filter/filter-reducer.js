import {createReducer} from '@reduxjs/toolkit';
import {handleChange} from './filter-actions';

const initialState = {filter: ''};
const filterReducer = createReducer(initialState, {
  [handleChange]: (state, action) => {
    // console.log('filerReducer-');
    // console.dir(state);
    // console.dir(action);
    // console.dir({...state, filter: action.payload});
    // console.log('-filerReducer');
    return {...state, filter: action.payload};
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

export default filterReducer;
