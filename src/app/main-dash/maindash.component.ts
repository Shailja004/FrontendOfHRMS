import { Component,HostListener,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewformService } from '../Services/viewform.service';
@Component({
  selector: 'app-maindash',
  templateUrl: './maindash.component.html',
  styleUrl: './maindash.component.css'
})
export class MaindashComponent implements OnInit {
  visible: boolean = false
  jobForm: FormGroup;
  ActiveJobs: any
  
  showDialog(){
   this.visible = true
  }

  constructor(private router: Router,private fb: FormBuilder,private ViewformService: ViewformService) {
    this.jobForm = this.fb.group({
      role: ['', Validators.required],
      description: ['', Validators.required],
      experience: ['', Validators.required],
      address: ['', Validators.required],
      rounds: this.fb.array([])  // FormArray to handle dynamic rounds
    });
  }

  getActiveJobs(){
    this.ViewformService.getJobs().subscribe((result) =>{
      this.ActiveJobs = result
    })
  }

  get rounds(): FormArray {
    return this.jobForm.get('rounds') as FormArray;
  }

  // Method to add a new round
  addRound() {
    const roundGroup = this.fb.group({
      roundName: ['', Validators.required]  // Each round has a roundName form control
    });

    this.rounds.push(roundGroup);
  }

  // Method to remove a round by index
  removeRound(index: number) {
    this.rounds.removeAt(index);
  }

  // Submit the form
  onSubmit() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
      // Submit form logic here
    } else {
      console.log('Form is invalid');
    }
  }

redirectToApplicantform() {
  this.router.navigate(['/viewform']);  // Redirect to login page
}
redirectToDashboard(){
  this.router.navigate(['/maindash']);
  }
redirectToAlljobs(){
this.router.navigate(['/jobenable']);
}

redirectTojobapplicantlist(jobId: any){
  localStorage.setItem('JobID', jobId)
  this.router.navigate(['/clickview']);
  }
ngOnInit(): void {
  this.initializeSidebar();
  this.getActiveJobs()
}
initializeSidebar() {
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
  const menuBar = document.querySelector('#content nav .bx.bx-menu');
  const sidebar = document.getElementById('sidebar');
  const searchButton = document.querySelector('#content nav form .form-input button');
  const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
  const searchForm = document.querySelector('#content nav form');
  const switchMode = document.getElementById('switch-mode');
  // Handle sidebar menu active state
  allSideMenu.forEach(item => {
    const li = item.parentElement;
    if (li) {  // Null check for 'li'
      item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
          const parentLi = i.parentElement;
          if (parentLi) {
            parentLi.classList.remove('active');
          }
        });
        li.classList.add('active');
      });
    }
  });
  // Toggle Sidebar
  menuBar?.addEventListener('click', function () {
    sidebar?.classList.toggle('hide');
  });
  // Search Button Toggle for Mobile
  searchButton?.addEventListener('click', function (e: Event) {
    if (window.innerWidth < 576) {
      e.preventDefault();
      searchForm?.classList.toggle('show');
      if (searchForm?.classList.contains('show')) {
        searchButtonIcon?.classList.replace('bx-search', 'bx-x');
      } else {
        searchButtonIcon?.classList.replace('bx-x', 'bx-search');
      }
    }
  });
  // Initial sidebar and search form state based on window width
  if (window.innerWidth < 768) {
    sidebar?.classList.add('hide');
  } else if (window.innerWidth > 576) {
    searchButtonIcon?.classList.replace('bx-x', 'bx-search');
    searchForm?.classList.remove('show');
  }
  // Handle window resize events
  window.addEventListener('resize', function () {
    if (window.innerWidth > 576) {
      searchButtonIcon?.classList.replace('bx-x', 'bx-search');
      searchForm?.classList.remove('show');
    }
  });
  // Toggle Dark Mode
  switchMode?.addEventListener('change', function () {
    if ((this as HTMLInputElement).checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
}
}