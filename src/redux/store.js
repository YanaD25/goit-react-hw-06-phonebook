// import { createStore, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';



// BEFORE
// const rootReducers = combineReducers({
//     contacts: contactsReducer,
// });
// const store = createStore(
//     rootReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// AFTER(toolkit)

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});


export default store;
