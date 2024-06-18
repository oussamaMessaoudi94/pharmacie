import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
productForm!: FormGroup
imagePreview:any
id: any
pro: any={}
title:any
  constructor(private fb: FormBuilder, private productService: ProductService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
    this.title = 'Edit Product'
    this.productService.getById(this.id).subscribe(
      (data)=>{
        this.pro = data.findedP
      }
    )
    } else {
     this.title = 'Add Product'
    }
  
    
    this.productForm = this.fb.group({
      proN: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      mark: [''],
      description: [''],
      img: ['']
    })
  }



addProduct(x:any){
  if (this.id) {
    this.productService.editProduct(this.pro).subscribe(
      (data)=>{
        console.log('UPDATE');
        
      }
    )
  } else {
    this.productService.addShop(x, this.productForm.value.img).subscribe(
      (data)=>{
        console.log('success', data.message);
        
      }
    )
  }

}






  onImageSelected(event: any) {
    let file: any = event.target.files[0];
    this.productForm.patchValue({ img: file });
    this.productForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
