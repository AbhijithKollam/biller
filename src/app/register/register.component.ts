import { Component } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private api: ApisService, private router: Router) { }

  registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    orgName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  register() {
    if (this.registerForm.valid) {
      const user = {
        userName: this.registerForm.value.userName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        orgName: this.registerForm.value.orgName
      }
      console.log("userName==", user);
      if (!user.userName || !user.email || !user.password || !user.orgName) {
        alert("Please fill the form completely")
      }
      else {
        this.api.registerApi(user).subscribe({
          next: (res: any) => {
            console.log(res)
            if (res.status == 200) {
              alert("Registered Successfully. Please login...")
              this.router.navigate(['/'])
            } else {
              alert(res.message)
            }

          },
          error: (res: any) => {
            console.log(res.error)
            alert(res.error.message)

          }
        })
      }
    }
  }
}
