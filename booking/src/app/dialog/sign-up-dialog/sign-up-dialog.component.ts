import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SignUpDialogComponent>,
    private _authService:AuthService,
    private _customerService: CustomerService,
    ) { }

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm  =  this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordCheck:['',Validators.required],
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      phone: ['', Validators.required]
  });
  }

  signUp(){
    this._authService.signUp(this.signUpForm.controls["username"].value,this.signUpForm.controls["password"].value).subscribe(data =>{
      this._authService.login(this.signUpForm.controls["username"].value,
                            this.signUpForm.controls["password"].value)
                            .subscribe( response => {
                              localStorage.setItem("ACCESS_TOKEN",response.headers.get('Authorization'));
                              this._customerService.save(this.signUpForm.controls["name"].value,
                              this.signUpForm.controls["secondName"].value,
                              this.signUpForm.controls["phone"].value).subscribe(resp=>{
                                this.dialogRef.close();
                              })
                            });
    })
  }

}
