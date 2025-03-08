import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {

  model: any = {}
constructor(private loginService: LoginService, private router: Router){}
  OnClick(input:any){
    console.log(input);
  }
  OnSubmit(form :NgForm){
    console.log(`Isvalid: + ${form.valid}`);
  }
  Onchange(input:any){
    console.log(input)
  }
  register(){
    debugger;
    this.loginService.register(this.model).subscribe(Response =>{
      console.log(Response)
      alert('Register Successful')
      this.router.navigate(['login'])
    },
    error  => {
      console.error(error)
      alert('Failed to Register')
    }
  );
  }
}
