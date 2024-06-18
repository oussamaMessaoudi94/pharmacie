import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'backend/services/invoice/invoice.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  xx:any
  prod:any={}
  p: number = 1;
  carts:any={}
  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.invoiceService.getAllInv().subscribe(
      (data)=>{
        this.prod = data.inv
        this.xx = data.inv
        for (let i = 0; i < this.prod.length; i++) {
          
          this.carts = this.prod[i].carts
          
        }
      }
    )
  }



  print(id:any){
this.router.navigate([`print-admin/${id}`])
  }

  delete(id:any){
    this.invoiceService.deleteInv(id).subscribe(
      (data)=>{
        location.reload()
      }
    )
  }
}
