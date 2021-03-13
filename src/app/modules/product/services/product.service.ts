import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import Product from '../models/product.model';
import  {uid} from 'uid'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _storageService: StorageService) { }


  createProduct(product: Product) {
    let storage = this.getProducts();
    storage = [...storage, {...product, id: uid(5)}];
    this._storageService.setItem('products', storage );

  }

  updateProduct( product: Product) {
    let storage = this.getProducts();
    const i = storage.findIndex( item => item.id === product.id);
    if (i>= 0) {
      storage[i] = product;
      this._storageService.setItem('products', storage );
      return true;
    }
    return false;
  }

  deleteProduct(id: string) {
    let storage = this.getProducts();
    storage = storage.filter( element => element.id != id)
    this._storageService.setItem('products', storage );
  }

  getProducts(): Product [] {
    return this._storageService.getItem('products') ? this._storageService.getItem('products') : [];
  }


}
