import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product.interface';
import PRODUCTS from '../../dummys/home.dummy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = PRODUCTS;
  productCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  chartCount() {
    this.productCount++;
  }
}

