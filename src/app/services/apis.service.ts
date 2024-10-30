import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  server_url = "http://localhost:3210"
  constructor(private http: HttpClient) { }

  registerApi(userData: any) {
    return this.http.post(`${this.server_url}/user/register`, userData)
  }

  loginApi(userData: any) {
    return this.http.post(`${this.server_url}/user/login`, userData)
  }

  addCustomer(customer: any) {
    return this.http.post(`${this.server_url}/customer/add`, customer)
  }
  listCustomers() {
    return this.http.get(`${this.server_url}/customer/getAll?orgId=${localStorage.getItem('orgId')}&orgName=${localStorage.getItem('orgName')}`);
  }
  addProduct(product:any) {
    return this.http.post(`${this.server_url}/product/add`,product);
  }
  listProducts() {
    return this.http.get(`${this.server_url}/product/getAll?orgId=${localStorage.getItem('orgId')}&orgName=${localStorage.getItem('orgName')}`);
  }
  editProducts(product:any) {
    return this.http.post(`${this.server_url}/product/edit`,product);
  }
  deleteProduct(id:any) {
    return this.http.get(`${this.server_url}/product/delete?productId=${id}&orgId=${localStorage.getItem('orgId')}&orgName=${localStorage.getItem('orgName')}`);
  }
  editCustomer(customer:any) {
    return this.http.post(`${this.server_url}/customer/edit`,customer);
  }
  deleteCustomer(id:any) {
    return this.http.get(`${this.server_url}/customer/delete?customerId=${id}&orgId=${localStorage.getItem('orgId')}&orgName=${localStorage.getItem('orgName')}`);
  }

}
