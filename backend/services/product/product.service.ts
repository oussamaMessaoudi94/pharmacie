import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productUrl = 'http://localhost:3000/products'
  constructor(private httpClient: HttpClient) { }

  addShop(product:any , img:File){
    let formData = new FormData()
    formData.append('proN', product.proN),
    formData.append('price', product.price),
    formData.append('quantity', product.quantity),
    formData.append('mark', product.mark),
    formData.append('description', product.description),
    formData.append('img', img)
    return this.httpClient.post<{message: any}>(this.productUrl, formData)
  }

  getAllPro(){
    return this.httpClient.get<{finded:any}>(`${this.productUrl}`)
  }

  getById(id: any){
    return this.httpClient.get<{findedP: any}>(`${this.productUrl}/${id}`)
  }

  editProduct(transfert:any){
    return this.httpClient.put<{message: any}>(`${this.productUrl}/${transfert._id}`, transfert)
  }

   deletePro(id:any){
    return this.httpClient.delete<{message: any}>(`${this.productUrl}/${id}`)
   }
}
