import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './modules/product/product.component';
// angular material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductContainerComponent } from './modules/product/product-container/product-container.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProductListComponent,
    ProductContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
