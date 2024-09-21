import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/header/header.component';
import { ShoppingCartComponent } from './content/shopping-cart/shopping-cart.component';
import { NavBarComponent } from './content/nav-bar/nav-bar.component';
import { ProductComponent } from './content/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    NavBarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
