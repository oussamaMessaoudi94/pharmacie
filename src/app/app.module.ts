import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Home/index/index.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { NavBarIndexComponent } from './Home/nav-bar-index/nav-bar-index.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarAdminComponent } from './admin/nav-bar-admin/nav-bar-admin.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';
import { ShopAdminComponent } from './admin/shop-admin/shop-admin.component';
import { AddShopComponent } from './admin/add-shop/add-shop.component';
import { ListShopComponent } from './admin/list-shop/list-shop.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShopAdminSingleComponent } from './admin/shop-admin-single/shop-admin-single.component';
import { CartComponent } from './admin/cart/cart.component';
import { CheckoutAdminComponent } from './admin/checkout-admin/checkout-admin.component';
import { PrintAdminComponent } from './admin/print-admin/print-admin.component';
import { NavBarUserComponent } from './user/nav-bar-user/nav-bar-user.component';
import { IndexUserComponent } from './user/index-user/index-user.component';
import { ShopUserComponent } from './user/shop-user/shop-user.component';
import { ShopSingleUserComponent } from './user/shop-single-user/shop-single-user.component';
import { AboutUerComponent } from './user/about-uer/about-uer.component';
import { CartUserComponent } from './user/cart-user/cart-user.component';
import { CheckoutUserComponent } from './user/checkout-user/checkout-user.component';
import { ThanksUserComponent } from './user/thanks-user/thanks-user.component';
import { RequestComponent } from './admin/request/request.component';
import { ThanksAdminComponent } from './admin/thanks-admin/thanks-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    NavBarIndexComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    NavBarAdminComponent,
    IndexAdminComponent,
    AboutAdminComponent,
    ShopAdminComponent,
    AddShopComponent,
    ListShopComponent,
    ShopAdminSingleComponent,
    CartComponent,
    CheckoutAdminComponent,
    PrintAdminComponent,
    NavBarUserComponent,
    IndexUserComponent,
    ShopUserComponent,
    ShopSingleUserComponent,
    AboutUerComponent,
    CartUserComponent,
    CheckoutUserComponent,
    ThanksUserComponent,
    RequestComponent,
    ThanksAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
