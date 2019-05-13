import { ProductPipe } from './product.pipe';
import { TempDataService } from './services/temp-data.service';
import { Product } from './entities/product';

describe('ProductPipe', () => {
  // 1.0: Empty search returns all product objects.
  // 1.1: Search for 'Brush' (name), should return one object.
  // 1.2: Search for 'brush' (name), should return one object.
  // 1.3: Search for 'bla bla' (description), should return 2 objects.
  // 1.4: Search for 'dottir' (user.lastname), should return empty array



  
  it('create an instance', () => {
    const pipe = new ProductPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return all products when search is empty', () => {
    // Arrange - Act - Assert (expect)

    // Arrange
    const prodArray  = TempDataService.products;
    const pipe = new ProductPipe();

    // Act
    let result: Product[] = pipe.transform(prodArray, '');

    // Assert (expect)
    expect(result).toEqual(prodArray);

  })
});
