import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './entities/product';

@Pipe({
  name: 'productFilter'
})
export class ProductPipe implements PipeTransform {

  transform(products: Product[], search: any = ""): Product[] {
    console.log(products);
    console.log(search);

    let result = products.filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase()));
    
    return result;
  }

}
