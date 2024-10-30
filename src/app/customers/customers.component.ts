import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  allCustomers: any = [];

  constructor(private api: ApisService) { }
  ngOnInit(): void {
    this.getAllCustomers()
  }
  getAllCustomers() {
    this.api.listCustomers().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allCustomers = res.data
      },
      error: (req: any) => {

      }
    })
  }
}
