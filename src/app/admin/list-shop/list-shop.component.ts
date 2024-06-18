import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {
xx:any
prod:any={}
p: number = 1;
  constructor(private productService:ProductService,private router: Router) { }

  ngOnInit(): void {

    this.productService.getAllPro().subscribe(
      (data)=>{
        this.prod = data.finded
      }
    )
  }



  editProd(id:any){
this.router.navigate([`addShop/${id}`])
  }

  deletePro(id:any){
this.productService.deletePro(id).subscribe(
  (data)=>{
    console.log('deleted');
    location.reload()
  }
)
  }
}
