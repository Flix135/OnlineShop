import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  appComp: AppComponent;

  constructor(fb: FormBuilder, private sharedService: SharedService, private router: Router, appComponent: AppComponent) {
    this.appComp = appComponent;
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }


  purchaseOrder(e): any {
    const userId = this.sharedService.getCookie('userid');
    const data = {
      userid: userId,
      street: (document.getElementById('street') as HTMLInputElement).value,
      streetnr: (document.getElementById('housenumber') as HTMLInputElement).value,
      zipcode: (document.getElementById('zip')  as HTMLInputElement).value,
      city: (document.getElementById('city')  as HTMLInputElement).value,
      firstname: (document.getElementById('firstname')  as HTMLInputElement).value,
      lastname: (document.getElementById('lastname')  as HTMLInputElement).value,
      products: [
        {
          title: 'Brot',
          price: 5.5,
          quantity: 4,
          currency: '€'
        }
      ]
    };
    if (data.street === '' || data.streetnr === '' || data.zipcode === '' ||
      data.firstname === '' || data.lastname === '' || data.city === '') {
      return alert('Bitte alle Felder ausfüllen!');
    }
    this.sharedService.postOrder(data).subscribe((res) => {
      this.appComp.itemNumber = 0;
      this.router.navigate(['orderOverview', {orderId: res.orderid, totalValue: res.value }]);
    });
  }

  ngOnInit(): void {
  }
}
