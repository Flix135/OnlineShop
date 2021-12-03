import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OnlineShop';
  itemNumber = 0;

  constructor(private router: Router, private sharedService: SharedService) {
  }


  ngOnInit() {
    this.router.navigate(['homepage']);
    this.sharedService.getCart().subscribe((res) => {
      this.itemNumber = res.length;
    });
  }

  getCartpage(): any {
    if (this.itemNumber > 0) {
      this.router.navigate(['cartpage']);
    }
  }
}
