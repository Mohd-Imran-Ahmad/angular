import { Component } from '@angular/core';
import { SignupServiceService } from '../signup-service/signup-service.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-form',
  imports: [FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {

leadObj = {
    username: '',
    password: '',
    email: '',
    mobileNumber: ''
  };


  constructor(private signupService: SignupServiceService,  private router: Router ) {}

 onSubmit(): void {
    this.signupService.api(this.leadObj).subscribe({
      next: (res) => {
        console.log('API Success:', res);

        // ✅ Show success message
        Swal.fire("Success", "Registration complete!", "success").then(() => {
          // ✅ Navigate to page2 AFTER user closes the success popup
          this.router.navigate(['/page2']);
        });
      },
      error: (err) => {
        console.log('API Error:', err);
        Swal.fire("Error", "Something went wrong!", "error");
      }
    });
  }


}