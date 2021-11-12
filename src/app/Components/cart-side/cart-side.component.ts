import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.css']
})
export class CartSideComponent implements OnInit {
  products: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res.Products;
    });
  }

}
