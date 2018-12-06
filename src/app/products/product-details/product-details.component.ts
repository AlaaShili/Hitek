import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public newNum:number=0;
  public product: any;
  public productId: number;
  public cookieValue : string;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute ,private cookieService: CookieService) { }
  
  addToCart(id:number): void {
    let itemId : string = '';
    itemId = itemId+id;
    this.cookieValue = this.cookieService.get('Hitek');
    if(this.cookieValue){
      this.cookieValue=this.cookieValue+','+itemId;
    }
    else{
      this.cookieValue=itemId;
    }
    
    this.cookieService.set( 'Hitek', this.cookieValue );
    this.newNum=this.cookieService.get('Hitek').split(',').length;
    this.productService.changeCartNumber(this.newNum);

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { this.productId = params['productId'];})
    this.productService.getProductById(this.productId).subscribe((response) => {this.product = response ;  console.log(this.product);});
  }


}
