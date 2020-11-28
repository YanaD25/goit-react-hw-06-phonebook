import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  return [...state, action.payload.contacts];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const filterContact = (state, action) => {
  return action.payload;
};
const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.removeContact]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.filterContact]: filterContact,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [...state, payload.contacts];
//     case contactsActions.removeContact.type:
//       return state.filter((contact) => contact.id !== payload.id);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactsActions.filterContact.type:
//       return payload;
//     default:
//       return state;
//   }
// };
