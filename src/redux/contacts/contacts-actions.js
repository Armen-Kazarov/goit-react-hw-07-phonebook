import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('fetchContactsRequest');
export const fetchContactsSuccess = createAction('fetchContactsSuccess');
export const fetchContactsError = createAction('fetchContactsError');

export const addContactRequest = createAction('ADDCONTACTSREQUESR');
export const addContactSuccess = createAction('ADDCONTACTSSUCCESS');
export const addContactError = createAction('ADDCONTACTSERROR');

export const deleteContactRequest = createAction('deleteContactRequest');
export const deleteContactSuccess = createAction('deleteContactSuccess');
export const deleteContactError = createAction('deleteContactError');

export const changeFilter = createAction('change');





// const deleteContact = createAction('contacts/delete');
// const changeFilter = createAction('contacts/change');

//export default { addContact, deleteContact, changeFilter };
