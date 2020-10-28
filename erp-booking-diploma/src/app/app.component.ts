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
  ngOnInit() {
    this.isLogin = this.authService.isLoggedIn()
    console.log(this.isLogin)
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get formControls() { return this.loginForm.controls; }
login(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
    console.log("invalid")
  }
  this.authService.login(this.loginForm.value);
  this.router.navigateByUrl('');
}
  title = 'erp-booking-diploma';
}

