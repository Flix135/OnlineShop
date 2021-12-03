import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {CartSiteComponent} from './Components/cart-site/cart-site.component';
import {CheckoutComponent} from './Components/checkout/checkout.component';
import {OrderOverviewComponent} from './Components/order-overview/order-overview.component';

const routes: Routes = [
  { path: 'homepage', component: HomeComponent },
  { path: 'cartpage', component: CartSiteComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orderOverview', component: OrderOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
