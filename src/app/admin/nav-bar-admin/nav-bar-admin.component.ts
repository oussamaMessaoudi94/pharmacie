import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'backend/services/cart/cart.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {
  users: any
  carts: any={}
  sum = 0
  sum2 = 0
  doc: any={}
  aa:any = 0
  constructor(private router:Router, private cartService: CartService) { }

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
          this.aa = this.doc.length
          

         }
         
        }
      }
    )
  }



  logout(){
    localStorage.removeItem('connectedUser');
    this.router.navigate([''])
  }
}
