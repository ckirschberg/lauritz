import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';

@Injectable({ providedIn: 'root'})
export class ProductActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 

  static LOG_IN: string = 'LOG_IN'; 
  
  // This should be in an Auth-Section and not in the product.
  // I include it here for now, to make the first redux exercise easier.
  // Action creator - calls the redux library.
  loggedIn(isLoggedIn: boolean): void {
    console.log(isLoggedIn);
    this.ngRedux.dispatch({
      type: ProductActions.LOG_IN,
      payload: isLoggedIn
    })
  }
}
