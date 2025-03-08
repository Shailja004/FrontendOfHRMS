import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ViewformComponent } from './view-form/viewform.component';
import { MaindashComponent } from './main-dash/maindash.component';
import { ClickviewComponent } from './clickview/clickview.component';
import { JobComponent } from './single-applicant/job.component';
import { AddjobComponent } from './addjob/addjob.component';
import { JobenableComponent } from './jobenable/jobenable.component';
import { AppComponent } from './app.component';
import { Round1Component } from './round1/round1.component';
const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'home'},  // Home page route
  { path: 'home', component: HomeComponent },  // Home page route
  { path: 'login', component: LoginComponent },  // Login page route
  { path: 'form', component: FormComponent },    //Applicant form
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'round1/:id', component: Round1Component },
  { path: 'viewform', component: ViewformComponent },
  { path: 'maindash', component: MaindashComponent },
  { path: 'clickview', component: ClickviewComponent },
  { path: 'job', component: JobComponent },
  { path:'addjob', component: AddjobComponent },
  { path:'jobenable', component: JobenableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }