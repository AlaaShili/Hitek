import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

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

  getProductById(id : number) {
    return this._http.get('http://localhost:8080/api/products/'+id);
  }

  getProductByCategory(categoryName : string) {
    return this._http.get('http://localhost:8080/api/category/'+categoryName);
  }

  changeCartNumber(cartNumber:number) {
    this.cartNumberSource.next(cartNumber);
  }

}
