import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }

  async ngOnInit() {
  this.productService.getProducts().subscribe((res) => {
    this.products = res.Products;
});
  if (!this.productService.getCookie('userid')) {
  this.productService.getUserId().subscribe((res) => {
    this.productService.setCookie('userid', res.userid, 30);
    });
  }
  this.productService.getCart().subscribe((res) => {
    console.log(res);
    });
}

addToCart(product): any {
    const userId = this.productService.getCookie('userid');
    const data = {productid: product._id, userid: userId};
    this.productService.postToCart(data).subscribe((res) => {
      location.reload();
  });
}
}
