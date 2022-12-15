import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../table/table.model';

@Injectable({
    providedIn: 'root'
  })
 export class productService {

    constructor(private http: HttpClient){  }

    getProducts(){
        return this.http.get<any>('http://192.168.200.116:3000/products')
    }
 }
