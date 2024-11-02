import { createSelector } from "@ngrx/store";
import { CounterState } from "./counter.models"

interface AppState{
  counter:CounterState;
}
export const trackCounter=(state:AppState)=>state.counter

export const selectCount=createSelector(trackCounter,(state)=>state.count)
