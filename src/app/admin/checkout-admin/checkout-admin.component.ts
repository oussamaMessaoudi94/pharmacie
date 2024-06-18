import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'backend/services/cart/cart.service';
import { InvoiceService } from 'backend/services/invoice/invoice.service';

@Component({
  selector: 'app-checkout-admin',
  templateUrl: './checkout-admin.component.html',
  styleUrls: ['./checkout-admin.component.css']
})
export class CheckoutAdminComponent implements OnInit {
carts:any ={}
sum = 0
sum2 = 0
checkForm!:FormGroup
yy:any= {}
users: any
doc: any={}
  constructor(private carteService:CartService, private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('connectedUser') || '[]')
    this.carteService.getAllCart().subscribe(
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
   
   
    this.checkForm = this.fb.group({
      country: [''],
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      note: ['']
    })

  }


  invoice(x:any){

    let y = {country:'', fName:'', lName:'', adresse:'', state:'', zip:'', email:'', phone:'', note:'', carts:'' }
    y.carts = this.doc,
    y.country = this.checkForm.value.country,
    y.fName = this.checkForm.value.fName,
    y.lName = this.checkForm.value.lName,
    y.adresse = this.checkForm.value.adresse,
    y.state = this.checkForm.value.state,
    y.zip = this.checkForm.value.zip,
    y.email = this.checkForm.value.email,
    y.phone = this.checkForm.value.phone,
    y.note = this.checkForm.value.note,
    console.log('here', y);
    
    
  
  
  
      this.invoiceService.addInvoice(y).subscribe(
        (data)=>{
          console.log(data.message);
        
        }
        
      )
      this.router.navigate(['thanks-admin'])
    }
}
