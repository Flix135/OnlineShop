import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-cart-site',
  templateUrl: './cart-site.component.html',
  styleUrls: ['./cart-site.component.css']
})
export class CartSiteComponent implements OnInit {
  products: any[];
  revisedproducts = [];
  totalPrice: string;
  totalQuantity: number;
  quantity = 0;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCart().subscribe((res) => {
      this.products = res;
      let value = 0;
      let price = 0;
      let previousProduct = {
        title: '',
        quantity: 0
      };
      this.products.sort((a, b) => {
        if (a.title === b.title) {
          return 0;
        } else {
          return (a.title > b.title ? 1 : -1);
        }
      });
      this.products.forEach(element => {
        const product = {
          price: parseFloat(element.price).toFixed(2),
          title: element.title,
          quantity: element.quantity ? element.quantity : 1,
          currency: '€',
          imgpath: element.imgpath
        };
        price += Number(parseFloat(product.price).toFixed(2));
        if (previousProduct.title !== product.title) {
        this.revisedproducts.push(product);
        previousProduct = product;
           } else {
        previousProduct.quantity += product.quantity;
           }
        this.quantity += product.quantity;
        value += product.quantity * Number(product.price);
    });
      this.totalPrice = value.toFixed(2);
      this.totalQuantity = this.quantity;
    });
  }
}
