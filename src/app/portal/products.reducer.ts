import { ProductActions } from './product.actions';
import { tassign } from 'tassign';
import { ProductState } from './../store';

// State at startup.
const INITIAL_STATE: ProductState = {isLoggedIn: undefined, products: []};

export function productsReducer(state: ProductState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
  case ProductActions.LOG_IN:
    console.log(action.payload);
    
    // Not allowed. Cannot change state in reducer. Must make a copy.
    // state.isLoggedIn = action.payload;
    // return state;

    // return Object.assign({}, state, {isLoggedIn: action.payload});
    return tassign(state, { isLoggedIn: action.payload });
   
  // case ProductActions.LOG_IN:
    // return tassign(state, { isBaby: action.payload });
   
    // case ProductActions.LOG_IN:
    // return tassign(state, { isBaby: action.payload });
    default:
    return state;
}
}
