import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'backend/services/cart/cart.service';
import { InvoiceService } from 'backend/services/invoice/invoice.service';
declare const printContent:any
@Component({
  selector: 'app-print-admin',
  templateUrl: './print-admin.component.html',
  styleUrls: ['./print-admin.component.css']
})
export class PrintAdminComponent implements OnInit {
carts:any={}
invoice: any={}
id:any
invId:any ={}
cartss:any={}
sum = 0
  constructor(private cartService:CartService, private invoiceService: InvoiceService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    printContent()

    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.invoiceService.getByIdInv(this.id).subscribe(
      (data)=>{
        this.invId = data.findedInv  
        this.cartss = this.invId.carts
        for (let i = 0; i < this.cartss.length; i++) {
          
          this.sum += this.cartss[i].somme
          console.log('here2', this.cartss[i].somme);
        }
 
      }
    )
    


    // this.cartService.getAllCart().subscribe(
    //   (data)=>{
    //     this.carts = data.doc
    //   }
    // )
    
    // this.invoiceService.getAllInv().subscribe(
    //   (data)=>{
    //    this.invoice = data.inv
    //    console.log('here3', this.invoice);
       
    //   }
      
    // )

  }

}
