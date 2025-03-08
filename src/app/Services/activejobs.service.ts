import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivejobsService {

  private apiUrl = 'https://localhost:7057/api/HRContoller/GetAllJobs'; // API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> { // Ensure the return type is consistent with API response
    return this.http.get<any[]>(this.apiUrl);
  }

  activate(id: number): Observable<any> {
    return this.http.put(`https://localhost:7057/api/HRContoller/ActivateJob/${id}`, null);
  }
  deactivate(id: number): Observable<any> {
    return this.http.put(`https://localhost:7057/api/HRContoller/DeactivateJob/${id}`, null);
  }
}
