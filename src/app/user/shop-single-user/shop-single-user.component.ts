import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'backend/services/cart/cart.service';
import { Cart2Service } from 'backend/services/cart2/cart2.service';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-shop-single-user',
  templateUrl: './shop-single-user.component.html',
  styleUrls: ['./shop-single-user.component.css']
})
export class ShopSingleUserComponent implements OnInit {
  id:any
  shopS:any={}
  requestForm!:FormGroup
  users:any
  msgError: any
  constructor(private productService:ProductService, private activatedRouter:ActivatedRoute, private fb:FormBuilder, private cartService:CartService, private cartService2: Cart2Service) { }

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
      var id = '5ebadc45a99bde77b2efb20e'; 

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
    y.id = this.users._id
    y.number = this.requestForm.value.number
    let z = (this.shopS.price * this.requestForm.value.number)
    y.somme = z

    if (this.requestForm.value.number > this.shopS.quantity) {
      this.msgError = "number"
      console.log(this.msgError);
      
    } else {
          this.cartService.addCart(y).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
    }
    
    

    
      }
      addCart2(x:any){
        let y = {somme:0 ,img:'', proN:'', price:'', materiel:'', description:'', mark:'', firstName:'', lastName:'', number:'', id:''}
        y.img = this.shopS.img,
        y.proN = this.shopS.proN,
        y.price = this.shopS.price,
        y.materiel = this.shopS._id,
        y.description = this.shopS.description,
        y.mark = this.shopS.mark,
        y.firstName = this.users.firstName,
        y.lastName = this.users.lastName,
        y.id = this.users._id
        y.number = this.requestForm.value.number
        let z = (this.shopS.price * this.requestForm.value.number)
        y.somme = z
        
        if (this.requestForm.value.number > this.shopS.quantity) {
          this.msgError = "number"
          console.log(this.msgError);
        } else {
          this.cartService2.addCart(y).subscribe(
            (data)=>{
              console.log(data.message);
              
            }
          )
        }

      }
}
