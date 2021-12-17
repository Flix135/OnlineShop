import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product.interface';
import {Cart} from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<Product>(`${this.baseUrl}/products`);
  }

  getUserId(): Observable<any> {
    return this.http.get<Cart>(`${this.baseUrl}/`);
  }

  getCart(): Observable<any> {
    const userid = this.getCookie('userid');
    return this.http.get<Cart>(`${this.baseUrl}/cart`, {params: {userid}});
  }

  setCookie(cname, cvalue, exdays): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  getCookie(cname): any {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  postToCart(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cart`, data);
  }

  deleteFromCart(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cartdelete`, data);
  }

  postOrder(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/orders`, data);
  }
}
