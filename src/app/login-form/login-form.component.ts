import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service/login-service.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  leadObj = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginServiceService,
    private router: Router) { }



  // onLogin() {
  //   this.loginService.api(this.leadObj).subscribe((res:any)=>{

  //     alert("User Found, Navigating inside");

  //     localStorage.setItem('logData', JSON.stringify(res.data))

  //     this.router.navigateByUrl("/page3")

  //   }, error => {
  //     alert("Wrong Crednetials")
  //   })
  // }

  // onLogin() {
  //   this.loginService.api(this.leadObj).subscribe(
  //     (res: any) => {
  //       alert("User Found, Navigating inside");

  //       localStorage.setItem('logData', JSON.stringify(res.data));
  //       this.router.navigateByUrl("/page3");
  //     },
  //     error => {
  //       localStorage.removeItem('logData');  // Clear old/stale token
  //       alert("Wrong Credentials");
  //     }
  //   );
  // }


onLogin() {
  this.loginService.api(this.leadObj).subscribe({
    next: (res: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Taking you to your dashboard...',
        timer: 2000,
        showConfirmButton: false
      });

      // Save token (make sure backend returns a real JWT here)
      localStorage.setItem('logData', res.data);

      setTimeout(() => {
        this.router.navigateByUrl("/page3");
      }, 2000);
    },
    error: () => {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Wrong Credentials',
        confirmButtonText: 'Try Again'
      });
    
    }
  });
}



}