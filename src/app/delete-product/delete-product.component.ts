import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApisService } from '../services/apis.service';
declare var bootstrap: any; // Declare bootstrap


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  @Input() product: any;
  @Output() productDeleted=new EventEmitter<string>();
  

  constructor(private api: ApisService) { }

  closeModal() {
    const modalElement = document.getElementById('deleteModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();

  }
  delete() {
    console.log("del prod", this.product)
    this.api.deleteProduct(this.product.productId).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.productDeleted.emit("deleted");

          alert("Item deleted")
          this.closeModal();
        }
        if (res.status == 404) {
          alert("Item not found")
          this.closeModal();
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }
}
