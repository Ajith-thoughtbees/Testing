import { Component, OnInit } from '@angular/core';
import { productService } from '../service/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  products: any = [];
  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().then(data => {this.products = data
    console.log(data);
    });

  }
}
