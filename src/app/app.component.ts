import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OnlineShop';
  itemNumber = 0;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit()  {
    this.router.navigate(['homepage']);
    this.productService.getCart().subscribe((res) => {
      this.itemNumber = res.length;
    });
  }
}
