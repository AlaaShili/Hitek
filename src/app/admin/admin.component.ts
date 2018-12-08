import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from 'src/app/product.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public products: any;
  constructor(private productService: ProductService,private router: Router) { }
  public product= new Product(0,'',null,'',true,'','','');
  public id:number;
  ngOnInit() {
    this.getAllProd();
  }

  getAllProd(){
    this.productService.getAllProducts().subscribe((response) => {this.products = response ; });
  }



  onSubmit() { 
  this.addProduct();
  
  }
 


  addProduct(){
    this.productService.addProduct(this.product).subscribe(product => {console.log(product); } );
    this.products.push(this.product);

  }

  deleteProduct(id:number){
    let itemId=id;
    if(id==0){
      itemId=this.id;
    }
    this.productService.deleteProductById(itemId).subscribe();
    let i=-1;
    for (let p of this.products){
      i++;
      if(p.productId==id){
        this.products.splice(i,1);
      }
     
    }
    
  }
}
