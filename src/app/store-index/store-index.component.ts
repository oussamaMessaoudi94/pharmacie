import { Component, OnInit } from '@angular/core';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-store-index',
  templateUrl: './store-index.component.html',
  styleUrls: ['./store-index.component.css']
})
export class StoreIndexComponent implements OnInit {
  pro : any={}
  p: number = 1;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllPro().subscribe(
      (data)=>{
        this.pro = data.finded
      }
    )
  }

}
