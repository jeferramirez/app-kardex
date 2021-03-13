import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import Product from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product [] = [];
  @Output() changeProduct = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  showProduct(item) {
    this.changeProduct.emit(item);
  }

}
