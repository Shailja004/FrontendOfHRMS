import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewformService } from '../Services/viewform.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-clickview',
  templateUrl: './clickview.component.html',
  styleUrls: ['./clickview.component.css']  // Fixed: changed to `styleUrls`
})
export class ClickviewComponent implements OnInit, OnDestroy {
  items: any[] = [];
  jobs: any[] = [];
  frontendDatas: any
  id = localStorage.getItem('JobID')
  

  constructor(public router: Router, private viewformService: ViewformService, private activatedRoutes: ActivatedRoute) {}
  ngOnDestroy(): void {
    localStorage.removeItem('JobID')
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

nextRound(id: any){
  
}


  ngOnInit(): void {
    this.initializeApp();
    this.getApplicant(this.id);
  }

  getApplicant(id: any){
    this.viewformService.getjobapplicant(id).subscribe((result) =>{
      this.frontendDatas = result
    })
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

    // Applicant data population
    interface Applicant {
      id: number;
      name: string;
      email: string;
      phonenumber: string;
      applyDate: string;
    }

    // const applicantData: Applicant[] = [
    //   { id: 1, name: "Harsh", email: "HK@example.com", phonenumber: "9864752648", applyDate: "2022-01-01" },
    //   { id: 2, name: "Shailja", email: "SB@example.com", phonenumber: "7756419986", applyDate: "2022-01-05" },
    //   { id: 3, name: "Chandra", email: "CS@example.com", phonenumber: "9770451371", applyDate: "2022-01-10" },
    //   // Add more applicants as needed
    // ];

    // const tableBody: HTMLElement | null = document.getElementById("applicant-table-body");

    // applicantData.forEach((applicant) => {
    //   const row = document.createElement("tr");
    //   row.innerHTML = `
    //     <td><input type="checkbox" class="checkbox" /></td>
    //     <td>${applicant.name}</td>
    //     <td>${applicant.email}</td>
    //     <td>${applicant.phonenumber}</td>
    //     <td>${applicant.applyDate}</td>
    //     <td class="actions">
    //       <a href="/applicant Info/Info.html"><button class="btn info-btn">Info</button></a>
    //       <button class="btn1 info-btn">Reject</button>
    //     </td>
    //   `;
    //   tableBody?.appendChild(row);
    // });

    // Handle Select All functionality
    const selectAllCheckbox: HTMLInputElement | null = document.getElementById("select-all") as HTMLInputElement | null;
    selectAllCheckbox?.addEventListener('click', () => {
      const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkbox");
      checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
    });
  }
}
