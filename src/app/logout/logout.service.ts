import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

//  private postApi = 'http://localhost:8080/api/v1/reg/logout';

// constructor(private http: HttpClient) { }

//   logout(): Observable<any> {
//      return this.http.post(this.postApi, {})
//    }

private postApi = 'http://localhost:8080/api/v1/reg/logout';
  
  constructor(private http: HttpClient,
              private router: Router,
          ) { }


      
  // logout(): void {
  //   // Optionally, call your API to log out the user on the server side
  //   this.http.post(this.postApi, {}).subscribe(
  //     response => {
  //       // Handle server response (optional)
  //       console.log('Logged out successfully');
        
  //       // Clear the token from localStorage
  //       localStorage.removeItem('logData');

  //       // Redirect to login page or homepage
  //       this.router.navigate(['/page2']);
  //     },
  //     error => {
  //       // Handle error (optional)
  //       console.error('Logout failed', error);
  //       // Handle error appropriately
  //     }
  //   );
  // }    

// logout(): void {
//   console.log('Logout method called');  // Add this for testing

//     this.http.post(this.postApi, {}).subscribe({
//       next: () => {
//         localStorage.removeItem('logData');
//         sessionStorage.clear();

//         Swal.fire({
//           icon: 'success',
//           title: 'Logout Successful',
//           text: 'Redirecting you...',
//           timer: 3000,
//           showConfirmButton: false,
//           allowOutsideClick: false,
//           allowEscapeKey: false,
//           didClose: () => {
//             this.router.navigateByUrl('/page2');
//           }
//         });
//       },
//       error: () => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Logout Failed',
//           text: 'An error occurred during logout.',
//           confirmButtonText: 'OK'
//         });
//       }
//     });
//   }

  // logout(): Observable<any> {
  //   // No need to manually set headers — interceptor handles it
  //   return this.http.post(this.postApi, {});
  // }

  
  // logout(): void {
  //   const token = localStorage.getItem('logData');

  //   // Call logout API (optional)
  //   if (token) {
  //     this.http.post(this.postApi, {}).subscribe({
  //       next: () => {
  //         this.clearSession();
  //       },
  //       error: (err) => {
  //         console.error('Logout error:', err);
  //         this.clearSession(); // Still clear session on error
  //       }
  //     });
  //   } else {
  //     this.clearSession();
  //   }
  // }

  // private clearSession(): void {
  //   localStorage.removeItem('logData'); // Remove token
  //   this.router.navigateByUrl('/page2');
  // }


logout(): void {
  Swal.fire({
    title: 'Are you sure you want to logout?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, logout!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      // Proceed with logout
      this.http.post(this.postApi, {}, { responseType: 'text' }).subscribe({
        next: () => {
          localStorage.removeItem('logData');
          sessionStorage.clear();

          Swal.fire({
            icon: 'success',
            title: 'Logout Successful',
            text: 'Redirecting you...',
            timer: 2000,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(() => {
            this.router.navigateByUrl('/page2');
          });
        },
        error: (err) => {
          console.error('Logout failed:', err);
          localStorage.removeItem('logData');

          Swal.fire({
            icon: 'error',
            title: 'Logout Failed',
            text: 'An error occurred during logout.',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/page2']);
          });
        }
      });
    }
  });
}


}
