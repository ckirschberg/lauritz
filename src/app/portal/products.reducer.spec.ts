import { TempDataService } from './../services/temp-data.service';
var deepFreeze = require('deep-freeze');
import { productsReducer } from './products.reducer';
import * as types from './product.actions';

describe('products reducer', () => {
 
  it('should return the initial state', () => {
   expect(productsReducer(undefined, {})).toEqual(
     {isLoggedIn: undefined, products: TempDataService.products});
  });

  it('set isLoggedIn to true', () => {
    
    let state = {isLoggedIn: undefined, products: TempDataService.products};
    deepFreeze(state);
    
    expect( productsReducer(state, { type: types.ProductActions.LOG_IN, payload: true }))
      .toEqual({isLoggedIn: true, products: TempDataService.products});
  });

  // Create a test to check that your create functionality works AND
  // does not make state mutations

});
