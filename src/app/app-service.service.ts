import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregistration } from './app.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }


  apiUrl = "http://localhost:3000/form-data/"

  postData(data:Iregistration):Observable<any>{
    return this.http.post<Iregistration>((`${this.apiUrl}enroll`),data)
    } 
}
