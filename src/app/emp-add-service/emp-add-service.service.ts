import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmpAddServiceService {
  private postApiUrl = 'http://localhost:8080/api/v1/employees/create';
  private getApiUrl = 'http://localhost:8080/api/v1/employees/getAll';
  // private deleteApiUrl = 'http://localhost:8080/api/v1/employees';
  //  private putApiUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) { }

  // POST
  createEmployee(leadObj: any): Observable<any> {
    return this.http.post(this.postApiUrl, leadObj, {
      responseType: 'text'
    });
  }

  // GET
  getEmployees(): Observable<any> {
    return this.http.get(this.getApiUrl);
  }

  // PUT (Update existing employee)
  // updateEmployee(id: number, employee: any): Observable<any> {
  //   return this.http.put(`${this.putApiUrl}/${id}`, employee);
  // }

  // DELETE
  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.deleteApiUrl}/${id}`, {
  //     responseType: 'text'  // Only specify responseType here
  //   });
  // }

  // DELETE
  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.deleteApiUrl}/${id}`);
  // }


// we cannot use interceptor then use this method
  // deleteEmployee(id: number): Observable<any> {
  //   const token = localStorage.getItem('authToken'); // Or use sessionStorage or a token service

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.delete(`${this.deleteApiUrl}/${id}`, {
  //     headers,
  //     responseType: 'text'
  //   });
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpbXJhbmdAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTc1NTE3MTgxMiwiZXhwIjoxNzU1MjU4MjEyfQ.6ZsQmYVMai984DqqKSvPfImelwrv_s8xPvQImka2p2A"
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.delete(`${this.deleteApiUrl}/${id}`, {
  //     headers,
  //     responseType: 'text'
  //   });
  // }

}

