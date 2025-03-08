import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7057/api/Applicant/AllActiveJobs'; // API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> { // Ensure the return type is consistent with API response
    return this.http.get<any[]>(this.apiUrl);
  }
  postApplicantStatus(data: any): Observable<any[]> { // Ensure the return type is consistent with API response
    return this.http.get<any[]>(this.apiUrl);
  }
}


