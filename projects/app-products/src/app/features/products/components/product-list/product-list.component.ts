import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../../models/i-products';
import { ProductService } from '../../services/product.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [  AsyncPipe,
    CurrencyPipe,
    RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products$?:Observable<IProducts[]>

  productService=inject(ProductService);

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.findAll();
  }

  findAll(){

    this.products$=this.productService.findAll();
    console.log('findAll ... '+this.products$)
  }
}
