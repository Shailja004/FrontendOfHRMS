import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
//   constructor(private router: Router) {}

//   redirectTodashboard() {
//     this.router.navigate(['/dashboard']);  // Redirect to login page
// }
model: any = {}
constructor(private router: Router, private loginService: LoginService){}

login(){
 this.loginService.login(this.model).subscribe(Response =>{
   console.log(Response)
   alert('Signin Successful')
  //  window.location.reload()
   this.router.navigate(['maindash'])
 },
 error =>{
   console.error(error)
   alert('Signin Failed')
 }
)
}
 onchange(input: any){
   console.log(input);
 }
 onSubmit(form: NgForm) {
   console.log(form.valid);
 }

}
