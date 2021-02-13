import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('./contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)))
}

const addContact = (name, number) => dispatch => {
const contact = {
  name,
  number,
}

  dispatch(addContactRequest())

  axios
    .post('./contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .error(error => dispatch(addContactError(error)))
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`todos/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)))
}

export default {
  fetchContacts,
  addContact,
  deleteContact
}