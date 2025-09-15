import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpGetServiceService {
 
//   private putApiUrl = 'http://localhost:8080/api/v1/employees';
//   private deleteApiUrl = 'http://localhost:8080/api/v1/employees';

//   constructor(private http: HttpClient) { }

// // put
//  updateEmployee(id: number, employee: any): Observable<any> {
//     return this.http.put(`${this.putApiUrl}/${id}`, employee);
//   }

//   // DELETE
//   deleteEmployee(id: number): Observable<any> {
//     return this.http.delete(`${this.deleteApiUrl}/${id}`, {
//       responseType: 'text'  // Only specify responseType here
//     });
//   }


 
  private putApiUrl      = 'http://localhost:8080/api/v1/employees';
  private deleteApiUrl   = 'http://localhost:8080/api/v1/employees';
  private getApiUrl      = 'http://localhost:8080/api/v1/employees/getAll';
  private getApiUrlExcel = 'http://localhost:8080/api/v1/employees/passengers/excel';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.getApiUrl );
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.deleteApiUrl}/${id}`, {
      responseType: 'text'  // Only specify responseType here
    });
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.putApiUrl}/${id}`, employee);
  }

getExcel(): Observable<Blob> {
  return this.http.get(this.getApiUrlExcel, {
    responseType: 'blob' // 👈 important for binary data
  });
}
  
// we cannot use interceptor then use this method
  // deleteEmployee(id: number): Observable<any> {
  //   const token = localStorage.getItem('logdata'); // Or use sessionStorage or a token service

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.delete(`${this.deleteApiUrl}/${id}`, {
  //     headers,
  //     responseType: 'text'
  //   });
  // }


  // getEmployeeById(id: number): Observable<any> {
  //   return this.http.get(`${this.getApiUrl}/${id}`);
  // }

  
}