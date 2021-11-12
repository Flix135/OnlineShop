import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {CartSideComponent} from './Components/cart-side/cart-side.component';
import {CheckoutComponent} from './Components/checkout/checkout.component';

const routes: Routes = [
  { path: 'homepage', component: HomeComponent },
  { path: 'cartpage', component: CartSideComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
