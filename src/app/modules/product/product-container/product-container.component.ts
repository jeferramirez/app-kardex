import { Component, OnInit } from '@angular/core';
import Product from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  product: Product;
  products : Product [] = [];
  constructor( private _productSrv: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  setFormProduct(product) {
    this.product = product;
  }


  getProducts() {
    this.products = this._productSrv.getProducts();
  }
}
