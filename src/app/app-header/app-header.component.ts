import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
 
  public cartNumber:number=0;
  

  constructor(private productService: ProductService,private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.get('Hitek')==''){
      this.cartNumber=0;
    }
    else{
      this.cartNumber=this.cookieService.get('Hitek').split(',').length;
    }
    
    this.productService.currentCartNumber.subscribe(cartNumber => {this.cartNumber = cartNumber},error=>console.log(error));
  }

}