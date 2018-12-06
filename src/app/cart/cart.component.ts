import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product: any;
  public productArray: any = [];
  public productIds: any = [];
  public cookieValue: string[];
  constructor(private productService: ProductService, private cookieService: CookieService) { }

  ngOnInit() {
    this.productIds = this.cookieService.get('Hitek').split(',');
    for (let pId of this.productIds) {
      this.productService.getProductById(pId).subscribe((response) => { this.product = response; this.productArray.push(response) });
    }
  }

  public removeCart(itemId: string) {
    this.cookieValue = this.cookieService.get('Hitek').split(',');
    let i: number = -1;
    for (let c of this.cookieValue) {
      if (c == itemId) {
        console.log(this.productArray);
        for (let p of this.productArray) {
          i++;
          if (p.productId == itemId) {
            this.productArray.splice(i, 1);
            this.updateCookie(c,this.cookieValue);
            let n=this.cookieService.get('Hitek').split(',').length
            if (this.cookieService.get('Hitek')==''){
              n=0;
            }
            this.productService.changeCartNumber(n);
            return;
          }
        }
      }
    }

  }
  updateCookie(id: string, cookieValue:string[]) {
    let i: number = -1;
    let newValue: string;
    for (let c of cookieValue) {
      i++;
      if (c == id) {
        cookieValue.splice(i, 1);
        newValue = cookieValue.join()
        this.cookieService.set( 'Hitek', newValue );
        return;
      }
    }
    
  }

}
