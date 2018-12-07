import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public products:any=[];
  public topProducts:any=[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((response) => {this.products = response ;console.log(this.products);
      this.topProducts.push(this.products[this.products.length-1])
      this.topProducts.push(this.products[this.products.length-2])
      this.topProducts.push(this.products[this.products.length-3])
      ;console.log(this.topProducts);});
   
  }

}
