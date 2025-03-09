import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { IProducts } from '../../models/i-products';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-details',
  imports: [
    AsyncPipe
  ],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {

  product$?:Observable<IProducts>

  productService=inject(ProductService);
  activatedRoute=inject(ActivatedRoute);
  id:number=0;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any)=>{
      const id=params['id'];
      if(id){
        this.id=id;
        this.findById(+id)
      }
    })

  }

findById(id:number){
  this.product$=this.productService.findById(id);
}
}
