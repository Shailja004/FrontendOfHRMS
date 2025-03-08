// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ViewformService {
//   private apiUrl = 'http://localhost:5278/api/Applicant/RegisterAndUploadResume'; // API URL

//   constructor(private http: HttpClient) {}

//   getData(): Observable<any[]> { // Ensure the return type is consistent with API response
//     return this.http.get<any[]>(this.apiUrl);

// }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewformService {

private apiUrl = 'https://localhost:7057/api/HRContoller/GetAllApplicants'; 
private jobsUrl = 'https://localhost:7057/api/Applicant/AllActiveJobs';
private jobapplicantUrl = 'https://localhost:7057/api/HRContoller';

  constructor(private http: HttpClient) { }

  getApplicants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
    getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.jobsUrl);
  }
  getjobapplicant(id: number): Observable<any> {
    return this.http.get(`${this.jobapplicantUrl}/GetApplicantsByJobId?jobId=${id}`);
  }
}
