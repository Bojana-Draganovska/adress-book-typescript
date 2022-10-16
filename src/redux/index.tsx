// Vendor Imports
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {addContact} from "../api/addContact";
import { db } from "../api/db";
import { getAllContact } from "../api/getAllContacts";

export interface Contact {
    id: string,
    name: string,
    surname: string,
    email: string,
    country: string
};

export interface addContact {
    type: "SET_DATA",
    contact: Contact
};

export interface changeContact {
    type: "CHANGE_DATA",
    contact: Contact
};

export interface deleteContact {
    type: "DELETE_DATA",
    id: string
}

type Action = addContact | changeContact | deleteContact;

const contactDefaultState: Contact[] = [];

export const contactReducer = (state = contactDefaultState, action: Action): Contact[] => {
    switch (action.type) {
        case "SET_DATA":
            addContact(action.contact);
            return [...state, action.contact];
        case "CHANGE_DATA":
            return state.map(contact => {
                if(contact.id === action.contact.id) {
                    return {
                        ...contact, ...action.contact
                    }
                } else {
                    return contact
                }
            });
        case "DELETE_DATA":
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
};

export const setData = (contact: Contact) : Action => {
    return {
        type: "SET_DATA",
        contact: contact
    };
};

export const changeData = (contact: Contact) : Action => {
    return {
        type: "CHANGE_DATA",
        contact: contact
    };
};

export const deleteData = (id: string) : Action => {
    return {
        type: "DELETE_DATA",
        id: id
    };
};

const rootReducer  = combineReducers({
    contacts: contactReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
