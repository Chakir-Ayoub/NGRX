import { contactReducer } from "./store/contact/contact.reducer";
import { counterReducer } from "./store/counter/counter.reducer";

export const appStore={
 counter: {name:'counter',reducer:counterReducer},
 contact: {name:'contact',reducer:contactReducer},
};
