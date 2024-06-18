import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartUrl = 'http://localhost:3000/carts'
  constructor(private httpClient: HttpClient) { }

  addCart(cart:any){
    return this.httpClient.post<{message:any}>(`${this.cartUrl}/addCart`, cart)
  }

  getAllCart(){
    return this.httpClient.get<{doc :any}>(`${this.cartUrl}`)
  }

  deleteCart(id:any){
    return this.httpClient.delete<{message: any}>(`${this.cartUrl}/${id}`)
  }

  deleteAll(){
    return this.httpClient.delete<{message: any}>(`${this.cartUrl}`)
  }
}
