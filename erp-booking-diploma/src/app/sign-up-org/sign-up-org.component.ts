import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmployerService } from '../services/employer.service';
import { SignUpService } from '../services/sugn-up.service';

@Component({
  selector: 'app-sign-up-org',
  templateUrl: './sign-up-org.component.html',
  styleUrls: ['./sign-up-org.component.css']
})
export class SignUpOrgComponent implements OnInit {
  loginForm: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  
  constructor(private _formBuilder: FormBuilder,
    private _employerService : EmployerService,
    private authService: AuthService,
    private router: Router,
    private _signUpService : SignUpService) {}

  submit(){
    this._signUpService
      .signUp(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value)
      .subscribe((resp:Response)=>{
        this.authService.login(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value).subscribe(
          response => {
            localStorage.setItem("ACCESS_TOKEN",response.headers.get('Authorization'));
            if(this.authService.isLoggedIn()){
              this._employerService.createOrganization(this.secondFormGroup.controls['name'].value
              ,this.secondFormGroup.controls['secondName'].value,
              this.secondFormGroup.controls['phone'].value,
              this.secondFormGroup.controls['orgName'].value).subscribe(r => {
                this.router.navigateByUrl('hotelbase');
                location.reload();
              })
             
            }
          }
        );
      },
      (err: any) =>{
        console.log(err)
      }

      ); 
    
     
  
    
  }

  ngOnInit() {
     this.loginForm  =  this._formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      phone: ['', Validators.required],
      orgName:['',Validators.required]

    });



  }
}
