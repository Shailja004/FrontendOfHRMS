import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HRService {
  constructor(private http: HttpClient) { }
  form(model: any):Observable<any>
  {
    return this.http.post('https://localhost:7057/api/Applicant/RegisterAndUploadResume', model);
  }

}