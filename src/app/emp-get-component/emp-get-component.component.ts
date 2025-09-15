import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { EmpGetServiceService } from '../emp-get-service/emp-get-service.service';
import { LogoutService } from '../logout/logout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-get-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './emp-get-component.component.html',
  styleUrl: './emp-get-component.component.css'
})
export class EmpGetComponentComponent  {

  employees: any[] = [];
  editingIndex: number | null = null; // track which row is being edited

  constructor(private employeeService: EmpGetServiceService,
              private logoutService: LogoutService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error('Error fetching employees:', err)
    });
  }

  // Start editing
  editEmployee(index: number): void {
    this.editingIndex = index;
  }

  // // Cancel editing
  cancelEdit(): void {
    this.editingIndex = null;
    this.loadEmployees(); // reload to discard unsaved changes
  }

  saveEmployee(emp: any): void {
  this.employeeService.updateEmployee(emp.id, emp).subscribe({
    next: () => {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Employee updated successfully!',
        confirmButtonColor: '#3085d6'
      });
      this.editingIndex = null;
    },
    error: (err) => {
      console.error('Error updating employee:', err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while updating!'
      });
    }
  });
}

// Delete employee
  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action will delete the employee permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Employee deleted successfully!', 'success');
            this.employees = this.employees.filter(emp => emp.id !== id);
          },
          error: err => {
            Swal.fire('Error!', 'Error deleting employee: ' + err.message, 'error');
          }
        });
      }
    });
  }

  
   getExcelList(): void {
    this.employeeService.getExcel().subscribe({
      next: (data: Blob) => {
        const blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'employee_data.xlsx';
        document.body.appendChild(a); // For Safari support
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Fetch Error:', err);
        Swal.fire("Error", "Failed to download employees Excel file!", "error");
      }
    });
  }
  
 
  logout(): void {
    this.logoutService.logout();  // Just call the method
  }

}


