import { Component, OnInit } from '@angular/core';
import { CartService } from 'backend/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts: any={}
sum = 0
doc: any ={}
users: any
sum2 = 0
  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('connectedUser') || '[]')
  this.cartService.getAllCart().subscribe(
    (data)=>{
      this.carts = data.doc
      let cartsId = []
      for (let i = 0; i < this.carts.length; i++) {
       this.sum += this.carts[i].somme
       if (this.carts[i].id==this.users._id) {
        cartsId.push(this.carts[i])
        this.doc = cartsId
        this.sum2 += this.carts[i].somme
      }
    }
  }
  )
  }



  deleteCart(id:any){
    this.cartService.deleteCart(id).subscribe(
      (data)=>{
        console.log(data.message);
        location.reload()
        
      }
    )
  }

  deleteAll(){
     this.cartService.deleteAll().subscribe(
      (data)=>{
        console.log('here', data.message);
        location.reload()
      }
    )
  }
}
