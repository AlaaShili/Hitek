import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {

  public product: any;
  public productId: number;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { this.productId = params['productId'];})
    this.productService.getProductById(this.productId).subscribe((response) => {this.product = response ;  console.log(this.product);});

  }

}
