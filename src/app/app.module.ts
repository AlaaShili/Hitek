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
import { LaptopsComponent } from './products/laptops/laptops.component';
import { SmartphonesComponent } from './products/smartphones/smartphones.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactPageComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomePageComponent,
    LaptopsComponent,
    SmartphonesComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'contact-page', component: ContactPageComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'products/laptops', component: LaptopsComponent},
      { path: 'product/:productId', component: ProductDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }