import { Component } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { Router } from '@angular/router';
import { GlobalStateService } from '../services/global-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  constructor(private api: ApisService, private router: Router, private globalState: GlobalStateService) { }
  login() {
    const admin = {
      email: this.email,
      password: this.password
    }

    this.api.loginApi(admin).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          alert("Logged in successfully")
          this.router.navigate(['/home']);
          this.globalState.setState('userData', { name: res.existingUser.userName, email: res.existingUser.email })
          localStorage.setItem('userName', res.existingUser.userName);
          localStorage.setItem('orgName', res.existingUser.orgName);
          localStorage.setItem('orgId', res.existingUser.orgId);


        }
        if (res.status == 406) {
          const message = res.message;
          alert(message)
          this.email = "";
          this.password = "";
        }
      },
      error: (res: any) => {
        const errorMessage = res.error.message || 'An unknown error occurred';
        alert(errorMessage);
      }
    })
  }
}
