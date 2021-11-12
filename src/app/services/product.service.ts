import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<any> {
    return this.http.get<Product>(`${this.baseUrl}/products`);
  }
}
