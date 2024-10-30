import { Component, EventEmitter, Output } from '@angular/core';
import { ApisService } from '../services/apis.service';
declare var bootstrap: any; // Declare bootstrap

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  itemName:string="";
  itemRate:any="";
  itemTax:any="";

  @Output() productAdded = new EventEmitter<string>();

  constructor(private api:ApisService){}
  
  closeModal() {
    const modalElement = document.getElementById('productModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();

  }
  saveProduct() {
  
    console.log(this.itemName,this.itemRate,this.itemTax)
    const product={
      name:this.itemName,
      tax:this.itemTax,
      rate:this.itemRate,
      orgId: localStorage.getItem('orgId'),
      orgName: localStorage.getItem('orgName')
    }
    this.api.addProduct(product).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.closeModal();

          this.productAdded.emit("added");
          
          alert("Product added")

          this.itemName = '';
          this.itemRate = null;
          this.itemTax = '';

        }
        if (res.status == 406) {
          const message = res.message;
          alert(message)
          this.itemName = '';
          this.itemRate = null;
          this.itemTax = '';
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }
}
