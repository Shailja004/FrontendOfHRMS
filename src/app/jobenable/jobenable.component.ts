import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivejobsService } from '../Services/activejobs.service';

@Component({
  selector: 'app-jobenable',
  templateUrl: './jobenable.component.html',
  styleUrls: ['./jobenable.component.css']
})
export class JobenableComponent implements OnInit {
  items: any[] = [];
  activateID: any
  deactivateID: any

  constructor(private router: Router, private activejobsService: ActivejobsService) {}

  ngOnInit(): void {
    this.initializeApp();
    this.loadJobs();
  }
  redirectToApplicantList(){
    this.router.navigate(['/clickview'])
  }

  redirectToAlljobs() {
    this.router.navigate(['/jobenable']);
  }

  redirectToDashboard() {
    this.router.navigate(['/maindash']);
  }

  redirectToApplicantform() {
    this.router.navigate(['/viewform']);
  }

  initializeApp(): void {
    // Sidebar menu toggle functionality
    const allSideMenu: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
      const li: HTMLElement | null = item.parentElement;
      item.addEventListener('click', function () {
        allSideMenu.forEach(i => i.parentElement?.classList.remove('active'));
        li?.classList.add('active');
      });
    });

    // Toggle Sidebar
    const menuBar: HTMLElement | null = document.querySelector('#content nav .bx.bx-menu');
    const sidebar: HTMLElement | null = document.getElementById('sidebar');
    menuBar?.addEventListener('click', () => {
      sidebar?.classList.toggle('hide');
    });

    // Search Form Toggle on Small Screens
    const searchButton: HTMLElement | null = document.querySelector('#content nav form .form-input button');
    const searchButtonIcon: HTMLElement | null = document.querySelector('#content nav form .form-input button .bx');
    const searchForm: HTMLElement | null = document.querySelector('#content nav form');
    searchButton?.addEventListener('click', (e: MouseEvent) => {
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

    // Handle window resize events for the search form and sidebar
    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        searchForm?.classList.remove('show');
      }
    });

    // Auto-hide sidebar on smaller screens
    if (window.innerWidth < 768) {
      sidebar?.classList.add('hide');
    } else if (window.innerWidth > 576) {
      searchButtonIcon?.classList.replace('bx-x', 'bx-search');
      searchForm?.classList.remove('show');
    }

    // Dark mode toggle
    const switchMode: HTMLInputElement | null = document.getElementById('switch-mode') as HTMLInputElement | null;
    switchMode?.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  loadJobs(): void {
    this.activejobsService.getData().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error('Error fetching job data:', error);
      }
    );
  }

  activateJob(id: any){
    this.activejobsService.activate(id).subscribe((result) =>{
       console.log(result)
    })
  }

  deactivatejob(id: any){
    this.activejobsService.deactivate(id).subscribe((result) =>{
      console.log(result)
   })
  }
  toggleStatus(job: any): void {
    job.isActive = !job.isActive;
}}
