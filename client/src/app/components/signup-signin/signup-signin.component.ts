import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-signup-signin',
  templateUrl: './signup-signin.component.html',
  styleUrls: ['./signup-signin.component.css']
})
export class SignupSigninComponent {

  constructor(public dialog: MatDialog, private _login: LoginService, private _router: Router){}
  openSignupDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SignupFormComponent, {
      width: '30%',
      height: '90%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
  openSigninDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '30%',
      height: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
}
