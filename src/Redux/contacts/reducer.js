import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

// const initialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contacts = createReducer([], {
    [actions.fetchContactSuccess]: (_, { payload }) => payload,
    [actions.addContactSuccess]: (state, action) => [...state, action.payload],
    [actions.deleteContactSuccess]: (state, action) => [
        state.filter((contact) => contact.id !== action.payload),
    ],
});

const filter = createReducer('', {
    [actions.filterContact]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
    [actions.fetchContactRequest]: () => true,
    [actions.fetchContactSuccess]: () => false,
    [actions.fetchContactError]: () => false,
    [actions.addContactRequest]: () => true,
    [actions.addContactSuccess]: () => false,
    [actions.addContactError]: () => false,
    [actions.deleteContactRequest]: () => true,
    [actions.deleteContactSuccess]: () => false,
    [actions.deleteContactError]: () => false,
});

// const error = createReducer(null, {
//     [actions.fetchContactError]: (state, action) => [...state, action.payload],
//     [actions.addContactError]: (state, action) => [...state, action.payload],
//     [actions.deleteContactError]: (_, action) => [action.payload],
// });

const error = createReducer(null, {
    [actions.fetchContactError]: (error) => error,
    [actions.addContactError]: (error) => error,
    [actions.deleteContactError]: (error) => error,
});

export default combineReducers({
    contacts,
    filter,
    loading,
    error,
});
