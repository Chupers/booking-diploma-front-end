import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }
  loginForm: FormGroup;
  isSubmitted  =  false;
  isLogin : boolean = false;
  isSignUp: boolean = false;
  ngOnInit() {
    this.isLogin = this.authService.isLoggedIn()
    console.log(this.isLogin)
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get formControls() { return this.loginForm.controls; }
signUp(){
  this.isSignUp = true;
  console.log("SING UP")
}
signOut(){
  this.authService.logout();
  location.reload();
}
login(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
    console.log("invalid")
  }
  this.authService.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value).subscribe(
    response => {
      localStorage.setItem("ACCESS_TOKEN",response.headers.get('Authorization'));
      if(this.authService.isLoggedIn()){
        this.isLogin = this.authService.isLoggedIn();
        if(this.isLogin){
          this.router.navigateByUrl('overview');
        }
        location.reload();
      }
    }
  );
 
 
}
  title = 'erp-booking-diploma';
}

