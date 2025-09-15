import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  postApiUrl = 'http://localhost:8080/api/v1/reg/login';
  

  constructor(private http: HttpClient) { }


  api(leadObj: any): Observable<any> {
    return this.http.post(this.postApiUrl, leadObj)
  }



}