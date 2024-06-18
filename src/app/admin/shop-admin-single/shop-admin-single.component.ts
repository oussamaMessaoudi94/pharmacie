import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'backend/services/cart/cart.service';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-shop-admin-single',
  templateUrl: './shop-admin-single.component.html',
  styleUrls: ['./shop-admin-single.component.css']
})
export class ShopAdminSingleComponent implements OnInit {
id:any
shopS:any={}
requestForm!:FormGroup
users:any
  constructor(private productService:ProductService, private activatedRouter:ActivatedRoute, private fb:FormBuilder, private cartService:CartService) { }

  ngOnInit(): void {
   this.users = JSON.parse(localStorage.getItem('connectedUser')||'[]')
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
      this.productService.getById(this.id).subscribe(
        (data)=>{
          this.shopS = data.findedP
        }
      )

      this.requestForm = this.fb.group({
        number:['']
      })
    
  }


  addCart(x:any){
let y = {somme:0 ,img:'', proN:'', price:'', materiel:'', description:'', mark:'', firstName:'', lastName:'', number:'', id:''}
y.img = this.shopS.img,
y.proN = this.shopS.proN,
y.price = this.shopS.price,
y.materiel = this.shopS._id,
y.description = this.shopS.description,
y.mark = this.shopS.mark,
y.firstName = this.users.firstName,
y.lastName = this.users.lastName,
y.id = this.users._id,
y.number = this.requestForm.value.number
let z = (this.shopS.price * this.requestForm.value.number)
y.somme = z

this.cartService.addCart(y).subscribe(
  (data)=>{
    console.log(data.message);
    
  }
)

  }
}
