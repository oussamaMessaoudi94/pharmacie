import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-shop-admin',
  templateUrl: './shop-admin.component.html',
  styleUrls: ['./shop-admin.component.css']
})
export class ShopAdminComponent implements OnInit {
pro : any={}
p: number = 1;
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
   

    this.productService.getAllPro().subscribe(
      (data)=>{
        this.pro = data.finded
      }
    )
  }



shopSingle(id:any){
this.router.navigate([`shop-single/${id}`])
}

  
}
