import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import Product from './models/product.model';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductService } from './services/product.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let producSrv: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [FormBuilder]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    producSrv = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dont sell product', () => {

    component.product = new Product( {
      name: 'keyboard',
      description: 'great keyboard',
      price: 10,
      image: '',
      stock: 10
    });

    component.units = -2;
    component.sellProduct();
    expect(component.errors.unitsError).toBeTruthy();
  });

  it('should sell product', () => {
    component.product = new Product( {
      name: 'keyboard',
      description: 'great keyboard',
      price: 20,
      image: '',
      stock: 10
    });
    component.units = 10;
    component.sellProduct();
    expect(component.errors.unitsError).toBeFalsy();
  });


  it('should create product', () => {
    const product = new Product( {
      name: 'keyboard',
      description: 'great keyboard',
      price: 20,
      image: '',
      stock: 10
    });

    component.productForm.patchValue(product);
    component.createProduct();
    expect(component.productForm.get('name').value).toBeNull();
  });

  it('should update product', () => {
    const product = new Product( {
      name: 'keyboard',
      description: 'great keyboard',
      price: 20,
      image: '',
      stock: 10
    });

    component.productForm.patchValue(product);
    spyOn(producSrv, 'updateProduct').and.returnValue(true);
    component.updateProduct();
    expect(component.previewimage).toEqual('../../../assets/defaultproduct.png');
  });



});








/*it('should create Product', ()=> {

  spyOn(permissionService, 'getPermissions').and.returnValue(of(mockAdministrador));
}); */


