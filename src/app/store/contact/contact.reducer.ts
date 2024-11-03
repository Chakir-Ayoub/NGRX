import { createReducer, on } from "@ngrx/store";
import { contactstate } from "./contact.state";
import { addcontacts, deletecontacts, loadContacts, toggleActiveContact, updatecontacts } from "./contact.actions";
import { contacts } from "../../data";

export const contactReducer=createReducer(
  contactstate,
  on(loadContacts, (state)=>({...state,contacts:contacts}
  )),
  on(addcontacts,(state,action)=>({...state,contacts:[action.contact,...state.contacts],
  })),
  on(updatecontacts,(state,action)=>({
    ...state,
    contacts:state.contacts.map((contact)=>contact.id===action.contact.id ? action.contact:contact),
  })),
  on(deletecontacts,(state,action)=>({
    ...state,
    contacts: state.contacts.filter((contact)=>contact.id!==action.id),
  })),
  on(toggleActiveContact,(state,action)=>({
    ...state,
    contacts: state.contacts.map((contact)=>
    contact.id===action.id ? {...contact,active: !contact.active}
    :contact
  ),
  }))
);
