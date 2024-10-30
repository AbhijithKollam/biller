import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any = [];
  constructor(private api: ApisService) { }
  ngOnInit(): void {
    this.getAllProducts()
  }
  addproduct(newProduct: string) {
   this.getAllProducts();
  }
  editproduct(newProduct: string) {
   this.getAllProducts();
  }
  deleteproduct(newProduct: string) {
   this.getAllProducts();
  }
  getAllProducts() {
    this.api.listProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allProducts = res.data
      },
      error: (req: any) => {

      }
    })
  }
 
}
