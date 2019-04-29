import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Product } from '../entities/product';
import { Rating } from '../entities/user';

@Injectable({ providedIn: 'root'})
export class UserActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 

  static RATE_USER: string = 'RATE_USER'
  
  rateUser(userId: string, rating: Rating) {
    this.ngRedux.dispatch({type:  UserActions.RATE_USER, payload: {userId, rating} });
  }

}
