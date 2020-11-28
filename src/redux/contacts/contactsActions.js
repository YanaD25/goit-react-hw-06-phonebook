// import actionsTypes from './contactsActionsTypes';
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (contact) => ({
  payload: {
    contacts: contact,
  },
}));
const removeContact = createAction('contacts/remove');
const filterContact = createAction('contacts/filter');


export default {
  addContact,
  removeContact,
  filterContact,
};


// BEFORE(without toolkit)
// const addContact = (contact) => ({
//   type: actionsTypes.ADD_CONTACT,
//   payload: {
//     contacts: contact,
//   },
// });

// const removeContact = (id) => ({
//   type: actionsTypes.REMOVE_CONTACT,
//   payload: {
//     id,
//   },
// });

// const filterContact = (filter) => ({
//   type: actionsTypes.FILTER_CONTACTS,
//   payload: {
//     filter,
//   },
// });

