import { Component } from '@angular/core';
import { EmpAddServiceService } from '../emp-add-service/emp-add-service.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-emp-add',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.css'
})

export class EmpAddComponent {
  employeeObj = {
    id: '',  
    name: '',
    department: '',
    position: '',
    salary: ''
  };

  employees: any[] = [];

  constructor(private employeeService: EmpAddServiceService, private router: Router) {}

  onSubmit(): void {
    this.employeeService.createEmployee(this.employeeObj).subscribe({
      next: (res) => {
        console.log('Add Successful:', res); 
        Swal.fire("Success", "Employee Added!", "success");
      },
      error: (err) => {
        console.log('API Error:', err); 
        Swal.fire("Error", "Something went wrong!", "error");
      }
    });
  }


  
  // onSubmit() and other logic...



// editEmployee(employee: any): void {
//   this.employeeObj = { ...employee };
// }

// updateEmployee(): void {
//   if (!this.employeeObj.id) {
//     Swal.fire('Error', 'Invalid employee ID', 'error');
//     return;
//   }

//   this.employeeService.updateEmployee(this.employeeObj.id, this.employeeObj).subscribe({
//     next: () => {
//       Swal.fire('Success', 'Employee updated successfully!', 'success');
//       this.cancel(); // reset after update
//     },
//     error: () => Swal.fire('Error', 'Failed to update employee', 'error')
//   });
// }

// cancel(): void {
//   this.employeeObj = {
//     id: null,
//     name: '',
//     department: '',
//     position: '',
//     salary: ''
//   };
// }



  // editEmployee(emp: any): void {
  //      this.employeeObj = { 
  //       ...emp }; // Copy the selected employee into form object
  //     this.router.navigate(['/page3']);
  //    }
  
  
  
  //     updateEmployee(): void {
  //     if (!this.employeeObj.id) {
  //       Swal.fire('Error', 'Invalid employee ID', 'error');
  //       return;
  //     }
  
  //     this.employeeService.updateEmployee(this.employeeObj.id, this.employeeObj).subscribe({
  //       next: () => {
  //         Swal.fire('Success', 'Employee updated successfully!', 'success');
  //         this.router.navigate(['/employees']);
  //       },
  //       error: () => Swal.fire('Error', 'Failed to update employee', 'error')
  //     });
  //   }
  
  //   cancel(): void {
  //     this.router.navigate(['/page4']);
  //   }
  

  
    // ngOnInit(): void {
    //  //  this.getAllEmployees();
  
    // }
  
  
    getAllEmployees(): void {
      this.employeeService.getEmployees().subscribe({
        next: (data) => {
          this.employees = data;
          console.log('Fetched Employees:', this.employees);
        },
        error: (err) => {
          console.error('Fetch Error:', err);
          Swal.fire("Error", "Failed to get employees!", "error");
        }
      });
    }

   
//   getAllEmployees(): void {
//   this.employeeService.getEmployees().subscribe({
//     next: (data) => {
//       console.log('Fetched Employees:', data);
//       this.router.navigate(['/page4'], { state: { employees: data } });
//     },
//     error: (err) => {
//       console.error('Fetch Error:', err);
//       Swal.fire("Error", "Failed to get employees!", "error");
//     }
//   });
// }

    
  // deleteEmployee(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'This action will delete the employee permanently!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonColor: '#3085d6',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.employeeService.deleteEmployee(id).subscribe({
  //         next: () => {
  //           Swal.fire('Deleted!', 'Employee deleted successfully!', 'success');
  //           this.employees = this.employees.filter(emp => emp.id !== id);
  //         },
  //         error: err => {
  //           Swal.fire('Error!', 'Error deleting employee: ' + err.message, 'error');
  //         }
  //       });
  //     }
  //   });
  // }
}
