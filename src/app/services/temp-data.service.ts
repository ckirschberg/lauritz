import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Gender } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  products: Product[] = [
    {_id: '1', user: 
      { _id:'1', username: 'abc', email: 'abc@kea.dk', 
      firstname: 'Asger', lastname: 'Poulsen', phone: '12121212', 
      gender: Gender.Male, birthDate: new Date(1985, 2, 2)},
      
    name: 'Hair Brush', description: 'test bla bla', 
    startingPrice: 100, minimumBid: 10, 
    images: [], dateCreated: new Date(2019,2,18), 
    endDate: new Date(2019,3,18), bids: [], location: 'Copenhagen'
    },
    
    {_id: '2', user: 
      { _id:'1', username: 'abc', email: 'abc@kea.dk', 
      firstname: 'Asger', lastname: 'Poulsen', phone: '12121212', 
      gender: Gender.Male, birthDate: new Date(1985, 2, 2)},
      
    name: 'Mirror', description: 'test bla bla', 
    startingPrice: 1000, minimumBid: 50, 
    images: [], dateCreated: new Date(2019,2,18), 
    endDate: new Date(2019,3,18), bids: [], location: 'Copenhagen'
    },
    
  ]
  
  constructor() { }


}
