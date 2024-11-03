import { createAction, props } from "@ngrx/store";
import { ContactModels } from "./contact.models";

export const loadContacts=createAction('[Contacts] load list of contacts')
export const addcontacts=createAction('[Contacts] add a contact',props<{contact:ContactModels}>())
export const updatecontacts=createAction('[Contacts] update a contact',props<{contact:ContactModels}>())
export const deletecontacts=createAction('[Contacts] delete a contact',props<{id:number}>())
export const toggleActiveContact=createAction('[Contacts] Toggle Active contact',props<{id:number}>())
