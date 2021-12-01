import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.css']
})
export class CartSideComponent implements OnInit {
  products: any[];
  totalPrice: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCart().subscribe((res) => {
      this.products = res;
      let price = 0;
      res.forEach(product => {
        price += Number(parseFloat(product.price).toFixed(2));
      });
      this.totalPrice = price.toFixed(2);
    });
  }
}
