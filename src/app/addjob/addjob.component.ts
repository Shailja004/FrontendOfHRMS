import { Component } from '@angular/core';

interface Job {
  id: number;
  role: string;
  description: string;
  experience: string;
  address: string;
  rounds: string[];
}
declare function Addjob():any;
@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css'] // Corrected the spelling here
})
export class AddjobComponent {
  ngOnInit(){
   // function Addjob();
  }
  // jobs: Job[] = [];
  // newJob: Job = {
  //   id: 0,
  //   role: "",
  //   description: "",
  //   experience: "",
  //   address: "",
  //   rounds: []
  // };
  // showJobDialog: boolean = false;
  // roundInput: string = "";

  // toggleJobDialog() {
  //   this.showJobDialog = !this.showJobDialog;
  // }

  // addRound() {
  //   const round = this.roundInput.trim();
  //   if (round) {
  //     this.newJob.rounds.push(round);
  //     this.roundInput = "";
  //   }
  // }

  // submitJob() {
  //   const job = { ...this.newJob, id: Date.now() };
  //   this.jobs.push(job);
  //   this.resetForm();
  // }

  // deleteJob(id: number) {
  //   this.jobs = this.jobs.filter(job => job.id !== id);
  // }

  // removeRound(index: number) {
  //   this.newJob.rounds.splice(index, 1);
  // }

  // resetForm() {
  //   this.newJob = {
  //     id: 0,
  //     role: "",
  //     description: "",
  //     experience: "",
  //     address: "",
  //     rounds: []
  //   };
  //   this.showJobDialog = false;
  // }
}
