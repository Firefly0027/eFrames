import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './content/header/header.component';
import { ConstantURL } from './Constants/ConstantsURL';
import { ShoppingCartComponent } from './content/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: ConstantURL.ShopURL , component: ShoppingCartComponent },
  // { path: 'frames/:id', component: FrameDetailsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

