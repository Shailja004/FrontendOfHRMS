// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { HRService } from '../Services/hr.service';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { DataService } from '../Services/data.service';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrl: './form.component.css'
// })
// export class FormComponent implements OnInit{
//   registerForm: FormGroup;
//   selectedFile: File | null = null;
//   items: any[] = []; 

//   constructor(private fb: FormBuilder, private http: HttpClient, private hrService: HRService, private dataservice: DataService) {
//     this.registerForm = this.fb.group({
//       Firstname: ['', Validators.required],
//       Lastname: ['', Validators.required],
//       Email: ['', [Validators.required, Validators.email]],
//       PhoneNumber: ['', Validators.required],
//       Experience: ['', Validators.required],
//       HighestQualification: ['', Validators.required],
//       CurrentAddress: [''],
//       Pincode: [''],
//       City: [''],
//       PreviousCompanyName: ['', Validators.required],
//       CurrentCompanyName: [''],
//       Platform: [''],
//       JobId: ['', Validators.required]
//     });
//   }
//   ngOnInit(): void {
    
//     this.dataservice.getData().subscribe(
//       (data: any[]) => {
//         this.items = data; 
//       },
//       (error) => {
//         console.error('Error fetching job roles:', error);
//       }
//     );
//   }


//   onFileSelected(event: any): void {
//     const file: File = event.target.files[0];
//     if (file && file.type === 'application/pdf') {
//       this.selectedFile = file;
//     } else {
//       alert('Only PDF files are allowed');
//       this.selectedFile = null;
//     }
//   }

//   onSubmit(): void {
//     if (!this.selectedFile) {
//       alert('Please upload a PDF resume.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('Firstname', this.registerForm.get('Firstname')?.value);
//     formData.append('Lastname', this.registerForm.get('Lastname')?.value);
//     formData.append('Email', this.registerForm.get('Email')?.value);
//     formData.append('PhoneNumber', this.registerForm.get('PhoneNumber')?.value);
//     formData.append('Experience', this.registerForm.get('Experience')?.value);
//     formData.append('HighestQualification', this.registerForm.get('HighestQualification')?.value);
//     formData.append('CurrentAddress', this.registerForm.get('CurrentAddress')?.value);
//     formData.append('Pincode', this.registerForm.get('Pincode')?.value);
//     formData.append('City', this.registerForm.get('City')?.value);
//     formData.append('PreviousCompanyName', this.registerForm.get('PreviousCompanyName')?.value);
//     formData.append('CurrentCompanyName', this.registerForm.get('CurrentCompanyName')?.value);
//     formData.append('Platform', this.registerForm.get('Platform')?.value);
//     formData.append('JobId', this.registerForm.get('JobId')?.value);
//     formData.append('ResumeFile', this.selectedFile!);

//     this.hrService.form( formData).subscribe(
//       (response) => {
//         alert('Applicant registered and resume uploaded successfully.');
//         this.registerForm.reset();
//       },
//       (error) => {
//         console.error('Error registering applicant:', error);
//         alert('Failed to register the applicant.');
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HRService } from '../Services/hr.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  selectedFile: File | null = null;
  items: any[] = []; 

  constructor(private fb: FormBuilder, private hrService: HRService, private dataservice: DataService) {
    // Initialize form group with validation
    this.registerForm = this.fb.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      Experience: ['', Validators.required],
      HighestQualification: ['', Validators.required],
      CurrentAddress: [''],
      Pincode: [''],
      City: [''],
      PreviousCompanyName: ['', Validators.required],
      CurrentCompanyName: [''],
      Platform: [''],
      jobId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch job roles from data service
    this.dataservice.getData().subscribe(
      (data: any[]) => {
        this.items = data; 
        console.log(this.items)
      },
      (error) => {
        console.error('Error fetching job roles:', error);
      }
    );
  }

  // Handle file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      alert('Only PDF files are allowed');
      this.selectedFile = null;
    }
  }

  // Submit form data
  onSubmit(): void {
    if (!this.selectedFile) {
      alert('Please upload a PDF resume.');
      return;
    }

    const formData = new FormData();
    formData.append('Firstname', this.registerForm.get('Firstname')?.value);
    formData.append('Lastname', this.registerForm.get('Lastname')?.value);
    formData.append('Email', this.registerForm.get('Email')?.value);
    formData.append('PhoneNumber', this.registerForm.get('PhoneNumber')?.value);
    formData.append('Experience', this.registerForm.get('Experience')?.value);
    formData.append('HighestQualification', this.registerForm.get('HighestQualification')?.value);
    formData.append('CurrentAddress', this.registerForm.get('CurrentAddress')?.value);
    formData.append('Pincode', this.registerForm.get('Pincode')?.value);
    formData.append('City', this.registerForm.get('City')?.value);
    formData.append('PreviousCompanyName', this.registerForm.get('PreviousCompanyName')?.value);
    formData.append('CurrentCompanyName', this.registerForm.get('CurrentCompanyName')?.value);
    formData.append('Platform', this.registerForm.get('Platform')?.value);
    formData.append('jobId', this.registerForm.get('jobId')?.value);
    formData.append('ResumeFile', this.selectedFile!);

    // Send form data to the backend
    this.hrService.form(formData).subscribe(
      (response) => {
        alert('Applicant registered and resume uploaded successfully.');
        this.registerForm.reset();
      },
      (error) => {
        console.error('Error registering applicant:', error);
        alert('Failed to register the applicant.');
      }
    );
  }
}
