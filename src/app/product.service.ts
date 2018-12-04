import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient) {}

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
}
