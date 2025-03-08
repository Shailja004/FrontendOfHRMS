import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ViewformComponent } from './view-form/viewform.component';
import { MaindashComponent } from './main-dash/maindash.component';
import { ClickviewComponent } from './clickview/clickview.component';
import { AddjobComponent } from './addjob/addjob.component';
import { JobComponent } from './single-applicant/job.component';
import { JobenableComponent } from './jobenable/jobenable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ActivatedRoute } from './activatedRoutes';
import { Round1Component } from './round1/round1.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    AdminRegisterComponent,
    ViewformComponent,
    MaindashComponent,
    ClickviewComponent,
    AddjobComponent,
    JobComponent,
    JobenableComponent,
    Round1Component,
    SelectComponent,
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ActivatedRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
