import { Component, OnInit } from '@angular/core';
import { ViewformService } from '../Services/viewform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.css']
})
export class ViewformComponent implements OnInit {
  items: any[] = [];
  jobs: any[] = [];

  constructor(private viewformService: ViewformService, private router: Router) { }
  redirectToAlljobs(){
    this.router.navigate(['/jobenable']);
    }
    redirectToDashboard(){
      this.router.navigate(['/maindash']);
      }
    redirectToApplicantform(){
      this.router.navigate(['/viewform']);
      }
      ngOnInit(): void {
        // Fetch applicants and jobs separately
        this.initializeSidebar();
      
        // Fetch all applicants
        this.viewformService.getApplicants().subscribe(
          (applicantData: any[]) => {
            this.items = applicantData;
      
            // Fetch all jobs
            this.viewformService.getJobs().subscribe(
              (jobData: any[]) => {
                this.jobs = jobData;
      
                // Log jobData to verify all jobs are being fetched
                console.log('Fetched Jobs:', jobData);
      
                // Map jobRole to each applicant based on jobId
                this.items = this.items.map(applicant => {
                  // Ensure that the jobId from the applicant matches a job from jobData
                  const job = this.jobs.find(j => j.jobId === applicant.jobId);
      
                  return {
                    ...applicant,
                    // If a matching job is found, assign the jobRole, otherwise set it to 'Unknown Role'
                    jobRole: job ? job.jobRole : 'Unknown Role'
                  };
                });
      
                // Log the mapped items to check if applicants have the correct jobRole
                console.log('Mapped Applicants:', this.items);
              },
              error => console.error('Error fetching jobs:', error)
            );
          },
          error => console.error('Error fetching applicants:', error)
        );
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
