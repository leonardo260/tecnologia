import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent implements OnInit {
  products:any
  constructor(private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    this.products=this.productService.getProductsFire()
  }
}
