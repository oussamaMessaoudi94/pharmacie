import { Component, OnInit } from '@angular/core';
import { ProductService } from 'backend/services/product/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
pro:any ={}
p: number = 1;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllPro().subscribe(
      (data)=>{
        this.pro = data.finded
      }
    )
  }

}
