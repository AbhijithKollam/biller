import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  customerName: string = '';
  selectedItem: string = '';
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  onSubmit() {
    alert(`Customer Name: ${this.customerName}\nSelected Item: ${this.selectedItem}`);
  }
}
