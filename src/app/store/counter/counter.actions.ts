import { createAction } from "@ngrx/store";

export const increment=createAction('[Counter] Increment Count');
export const decrement=createAction('[Counter] Decrement Count');
export const reset=createAction('[Counter] reset Count');
