import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { counterState } from "./counter.state";

export const counterReducer=createReducer(
  counterState,
  on(increment,(state)=>({...state, count: state.count + 1})),
  on(decrement,(state)=>({...state, count: state.count -1 })),
  on(reset,(state)=>({...state, count: 0}))
);
