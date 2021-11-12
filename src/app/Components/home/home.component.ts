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
}
}
