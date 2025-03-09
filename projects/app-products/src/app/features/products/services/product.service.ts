import { inject, Injectable } from '@angular/core';
import { GLOBAL_MFA_PRODUCTS } from '../../../constants/global.constants';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../models/i-products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri =`${GLOBAL_MFA_PRODUCTS.API_BASE}/products`;

 http=inject(HttpClient);

 findAll():Observable<IProducts[]>{
  return this.http.get<IProducts[]>(this.uri)
 }
 findById(id:number):Observable<IProducts>{
  const uri_local=`${this.uri}/${id}`;
  return this.http.get<IProducts>(uri_local)
 }
}
