import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  public products: any;
  public title: string;
  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.productService.getAllProducts().subscribe((response) => {this.products = response ;  console.log(this.products);});
    this.title='Product';
  }

  public getByCategory(categoryName: string){
    this.productService.getProductByCategory(categoryName).subscribe((response) => {this.products = response ;  console.log(this.products);});
    this.title=categoryName;
  }
  
}
