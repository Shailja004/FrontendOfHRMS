import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private http:HttpClient){}

  private url ='https://localhost:7057/api/Account1'

  register(model: any): Observable<any>{
      return this.http.post(`${this.url}/CompanyRegister`, model,{ responseType: 'text'})
  }

  login(model:any):Observable<any>{
      return this.http.post(`${this.url}/Login`,model)
  }
}
