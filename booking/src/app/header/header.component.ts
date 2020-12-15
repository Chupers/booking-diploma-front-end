import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialog/login-dialog/login-dialog.component';
import { SignUpDialogComponent } from '../dialog/sign-up-dialog/sign-up-dialog.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private _authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLogin = this._authService.isLoggedIn()
  }

  isLogin:Boolean = false;
  isAdmin:Boolean = false;

  login(){
    const dialogRef = this.dialog.open(LoginDialogComponent)
    dialogRef.afterClosed().subscribe(data =>{
      this.isLogin = this._authService.isLoggedIn()
    })
  }

  logout(){
    this._authService.logout();
    window.location.reload();
  }

  signUp(){
    const dialogRef = this.dialog.open(SignUpDialogComponent)
    dialogRef.afterClosed().subscribe(data =>{
      this.isLogin = this._authService.isLoggedIn()
    })
  }

  openAccount(){

  }

}
