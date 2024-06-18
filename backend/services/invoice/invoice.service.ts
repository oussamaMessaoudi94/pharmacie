import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
invoiceUrl = 'http://localhost:3000/invoices'
  constructor(private httpClient: HttpClient) { }

  addInvoice(invoice:any){
    return this.httpClient.post<{message: any}>(`${this.invoiceUrl}/addInvoice`, invoice)
  }

  getAllInv(){
    return this.httpClient.get<{inv: any}>(`${this.invoiceUrl}`)
  }

  deleteInv(id:any){
    return this.httpClient.delete<{message: any}>(`${this.invoiceUrl}/${id}`)
  }

  getByIdInv(id:any){
    return this.httpClient.get<{findedInv: any}>(`${this.invoiceUrl}/${id}`)
  }
}
