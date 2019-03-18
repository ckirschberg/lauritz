import { TempDataService } from './../../services/temp-data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private temp: TempDataService) { }

  ngOnInit() {
    // Read the id from the url
    
    // Find the product object based on the id, from the temp-data service.
    const testId = '1';
    
    // A non-finished way to call a method in the temp data service. 
    this.temp.findProduct(testId);
    // Display the product in the ui.

  }

}
