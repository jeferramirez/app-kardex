import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './services/product.service';
import Swal from 'sweetalert2';
import Product from './models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges{

  @ViewChild('closebutton') closebutton;
  @Input() product: Product;
  @Output() handleListProduct = new EventEmitter<boolean>();


  productForm: FormGroup = this.fb.group( {
    name : ['', Validators.required],
    price : [0, Validators.required],
    stock : [0, Validators.required],
    description : ['', Validators.required],
    image : [null],
    id: [null]
  });
  units: number = 0;
  total: number = 0;
  previewimage = '../../../assets/defaultproduct.png';
  errors = {
    unitsError: false
  }

  constructor(private _productSrv: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createProduct() {
    this._productSrv.createProduct(this.productForm.value);
    this.productForm.reset();
    this.previewimage = '../../../assets/defaultproduct.png';
    Swal.fire({
      title: 'Sucess!',
      text: 'Save Product ',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  updateProduct() {
    const resp = this._productSrv.updateProduct(this.productForm.value);
    if (resp) {
      Swal.fire({
        title: 'Sucess!',
        text: 'Update Product ',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      this.productForm.reset();
      this.handleListProduct.emit(true);
      this.previewimage = '../../../assets/defaultproduct.png';
    }
  }

  async loadImage(event) {
    const {  previewimage } = await this.onFileSelect(event);
    this.previewimage = previewimage;
    this.productForm.get('image').setValue(this.previewimage);
  }

  filReader(file): Promise<any> {
    return new Promise((resolve) => {
      const fr = new FileReader();
      fr.onload = resolve; // CHANGE to whatever function you want which would eventually call resolve
      fr.readAsDataURL(file);
    });
  }

  async onFileSelect(event): Promise<any> {
    if (event.target.files.length > 0) {
      const filetarget = event.target.files[0];
      const reader = await this.filReader(filetarget);
      return { file: filetarget, previewimage: reader.target.result };
    }
  }

  sellProduct() {
    if (this.units <= 0 || this.units > this.product.stock) {
       this.errors.unitsError = true;
       return;
    }
    this.productForm.get('stock').setValue(this.productForm.get('stock').value - this.units);
    this.updateProduct();
    this.closebutton.nativeElement.click();

  }

  ngOnChanges(changes) {
    if (changes.product.currentValue) {
      this.productForm.patchValue(this.product);
      this.previewimage = this.product.image ? this.product.image : '../../../assets/defaultproduct.png' ;
    }
  }


}
