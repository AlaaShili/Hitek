import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
  providers: [ProductService]
})
export class LaptopsComponent implements OnInit {

  public products: any;

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((response) => {this.products = response ;  console.log(this.products);});
  }
}
