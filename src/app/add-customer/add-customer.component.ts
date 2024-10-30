import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

declare var bootstrap: any; // Declare bootstrap

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customerName: string = '';
  customerPhone: number | null = null;
  customerAddress: string = '';

  constructor(private api: ApisService) { }

  closeModal() {
    const modalElement = document.getElementById('customerModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();
    this.customerName = "";
    this.customerPhone = null;
    this.customerAddress = "";
  }

  saveCustomer() {
    const customer = {
      cName: this.customerName,
      cPhone: this.customerPhone,
      cAddress: this.customerAddress,
      orgId: localStorage.getItem('orgId'),
      orgName: localStorage.getItem('orgName')
    }
    this.api.addCustomer(customer).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.closeModal();

          alert("Customer added")

          this.customerName = '';
          this.customerPhone = null;
          this.customerAddress = '';

        }
        if (res.status == 406) {
          const message = res.message;
          alert(message)
          this.customerName = "";
          this.customerPhone = null;
          this.customerAddress = "";
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }



}
