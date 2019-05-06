import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { Gender } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';
  constructor(private http: HttpClient) { }
  

  getProducts() : Observable<Product[]>{
    // Filter only customerId === 'chrk' should be used.
    return this.http.get(this.baseUrl) as Observable<Product[]>;
  }
  createProduct(product: Product) : Observable<any> {
    product.customerId = 'chrk2';
    product.user = {
      _id:'1', username: 'abc', email: 'abc@kea.dk', 
      firstname: 'Asger', lastname: 'Poulsen', phone: '12121212', 
      gender: Gender.Male, birthDate: new Date(1985, 2, 2),
      profileImage: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg',
      ratings: []
    };
    return this.http.post(this.baseUrl, product);
  }
  updateProduct(product: Product) {

  }
  deleteProduct(productId: string) {

  }
}
