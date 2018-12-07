import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CookieService } from 'ngx-cookie-service';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactPageComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomePageComponent,
    ProductDetailsComponent,
    CartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'contact-page', component: ContactPageComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'product/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'admin', component: AdminComponent},
    ],{scrollPositionRestoration: 'enabled'})
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }