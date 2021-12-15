import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[];

  constructor(private sharedService: SharedService) { }

  async ngOnInit() {
  this.sharedService.getProducts().subscribe((res) => {
    this.products = res.Products;
});
  if (!this.sharedService.getCookie('userid')) {
  this.sharedService.getUserId().subscribe((res) => {
    this.sharedService.setCookie('userid', res.userid, 30);
    });
  }
  this.sharedService.getCart().subscribe((res) => {});
}

addToCart(product): any {
    // const userId = this.sharedService.getCookie('userid');
    // const data = {productid: product._id, userid: userId};
    this.sharedService.postToCart(product).subscribe((res) => {
      location.reload();
  });
}
}
