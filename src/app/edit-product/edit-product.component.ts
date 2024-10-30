import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApisService } from '../services/apis.service';
declare var bootstrap: any; // Declare bootstrap


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  @Input() product: any;
  @Output() productEdited = new EventEmitter<string>();

  name:any=""
  tax:any=""
  rate:any=""

ngOnInit(): void {
  console.log(this.product,"prod------")
}

  constructor(private api: ApisService) { }

  closeModal() {
    const modalElement = document.getElementById('editProductModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();
    this.name=""
    this.tax=""
    this.rate=""

  }
  click(data:any){
    this.name=data.name
    this.tax=data.tax
    this.rate=data.rate
    console.log(this.name,this.tax,this.rate);
    
    
  }
  editProduct() {
    console.log("product", this.product);

    this.api.editProducts(this.product).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.productEdited.emit("edited");

          this.closeModal();

          alert("Product edited")

      
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }
}
