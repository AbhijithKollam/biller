import { Component, Input } from '@angular/core';
import { ApisService } from '../services/apis.service';
declare var bootstrap: any; // Declare bootstrap

@Component({
  selector: 'app-actions-customer',
  templateUrl: './actions-customer.component.html',
  styleUrls: ['./actions-customer.component.css']
})
export class ActionsCustomerComponent {
  @Input() customer: any;
  constructor(private api: ApisService) { }

  closeEditModal() {
    const modalElement = document.getElementById('editProductModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();
  }
  closeDeleteModal() {
    const modalElement = document.getElementById('deleteModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();
  }
  editCustomer(){
    this.api.editCustomer(this.customer).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.closeEditModal();
          alert("Product edited")
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }
  delete(){
    this.api.deleteCustomer(this.customer.customerId).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          alert("Customer deleted")
          this.closeDeleteModal()
        }
        if (res.status == 404) {
          alert("Customer not found")
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }
 
}
