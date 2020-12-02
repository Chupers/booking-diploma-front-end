import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    private _authService:AuthService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm  =  this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  loginForm: FormGroup;
  

  login(){
    this._authService.login(this.loginForm.controls["username"].value,
                            this.loginForm.controls["password"].value)
                            .subscribe( response => {
                              localStorage.setItem("ACCESS_TOKEN",response.headers.get('Authorization'));
                              this.dialogRef.close();
                            });
   
  }

}
