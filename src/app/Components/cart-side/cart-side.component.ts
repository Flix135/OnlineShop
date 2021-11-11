import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product.interface';
import PRODUCTS from '../../dummys/home.dummy';

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.css']
})
export class CartSideComponent implements OnInit {
  products: Product[] = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
