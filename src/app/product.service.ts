import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  private cartNumberSource = new Subject<number>();
  currentCartNumber = this.cartNumberSource.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  getAllProducts() {
    return this._http.get('http://localhost:8080/api/products');
  }

  addProduct(product:Product) {
    return this._http.post('http://localhost:8080/api/products', product);
  }

  getProductById(id : number) {
    return this._http.get('http://localhost:8080/api/products/'+id);
  }

  deleteProductById(id : number) {
    return this._http.delete('http://localhost:8080/api/delete/'+id);
  }

  getProductByCategory(categoryName : string) {
    return this._http.get('http://localhost:8080/api/category/'+categoryName);
  }

  changeCartNumber(cartNumber:number) {
    this.cartNumberSource.next(cartNumber);
  }

}
