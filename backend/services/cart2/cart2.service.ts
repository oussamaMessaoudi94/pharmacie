import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {
cart2Url = 'http://localhost:3000/carts2'
  constructor(private httpClient: HttpClient) { }

  addCart(cart:any){
    return this.httpClient.post<{message: any}>(`${this.cart2Url}/addCart`, cart)
  }
}
