import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Home/index/index.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';
import { AddShopComponent } from './admin/add-shop/add-shop.component';
import { ListShopComponent } from './admin/list-shop/list-shop.component';
import { ShopAdminComponent } from './admin/shop-admin/shop-admin.component';
import { ShopAdminSingleComponent } from './admin/shop-admin-single/shop-admin-single.component';
import { CartComponent } from './admin/cart/cart.component';
import { CheckoutAdminComponent } from './admin/checkout-admin/checkout-admin.component';
import { PrintAdminComponent } from './admin/print-admin/print-admin.component';
import { IndexUserComponent } from './user/index-user/index-user.component';
import { ShopUserComponent } from './user/shop-user/shop-user.component';
import { ShopSingleUserComponent } from './user/shop-single-user/shop-single-user.component';
import { AboutUerComponent } from './user/about-uer/about-uer.component';
import { CartUserComponent } from './user/cart-user/cart-user.component';
import { CheckoutUserComponent } from './user/checkout-user/checkout-user.component';
import { ThanksUserComponent } from './user/thanks-user/thanks-user.component';
import { RequestComponent } from './admin/request/request.component';
import { ThanksAdminComponent } from './admin/thanks-admin/thanks-admin.component';
import { StoreIndexComponent } from './store-index/store-index.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'about', component:AboutComponent},
  {path:'aboutAdmin', component:AboutAdminComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'indexAdmin', component:IndexAdminComponent},
  {path:'addShop', component:AddShopComponent},
  {path:'addShop/:id', component:AddShopComponent},
  {path:'listShop', component:ListShopComponent},
  {path:'shop', component:ShopAdminComponent},
  {path:'shop-index', component:StoreIndexComponent},
  {path:'shop-single', component:ShopAdminSingleComponent},
  {path:'shop-single/:id', component:ShopAdminSingleComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout-admin', component:CheckoutAdminComponent},
  {path:'print-admin', component:PrintAdminComponent},
  {path:'print-admin/:id', component:PrintAdminComponent},
  {path:'index-user', component:IndexUserComponent},
  {path:'shop-user', component:ShopUserComponent},
  {path:'shop-single-user', component:ShopSingleUserComponent},
  {path:'shop-single-user/:id', component:ShopSingleUserComponent},
  {path:'about-user', component:AboutUerComponent},
  {path:'cart-user', component:CartUserComponent},
  {path:'checkout-user', component:CheckoutUserComponent},
  {path:'thanks-user', component:ThanksUserComponent},
  {path:'thanks-admin', component:ThanksAdminComponent},
  {path:'request', component:RequestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
