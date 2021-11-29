import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {element} from "protractor";

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.css']
})
export class CartSideComponent implements OnInit {
  products: any[];
  totalPrice = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe((res) => {
      this.products = res;
      res.forEach(product => {
        this.totalPrice += parseFloat(product.price);
      });
    });
  }

}
