import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';
  constructor(private http: HttpClient) { }
  

  getProducts() : Observable<Product[]>{
    // Filter only customerId === 'chrk' should be used.
    return undefined; // delete this line...
  }
  createProduct(product: Product) : Observable<any> {
    product.customerId = 'chrk';
    return this.http.post(this.baseUrl, product);
  }
  updateProduct(product: Product) {

  }
  deleteProduct(productId: string) {

  }
}
