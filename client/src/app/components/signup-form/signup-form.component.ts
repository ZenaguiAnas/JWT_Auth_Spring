import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

 
  LoginForm: FormGroup;
  errorMsg: any;
  hide = true;
  error!: boolean;
  show!: boolean;
  sendData!: boolean;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<SignupFormComponent>,
    private _router: Router,
    private _login: LoginService,
  ) {
    this.LoginForm = this._fb.group({
      username: this._fb.control(""),
      email: this._fb.control(""),
      password: this._fb.control(""),
    })
  }

  OnFormSignup(username: string,email:string, password: string, role:string) {
      this._login.signup(username, email, password, role).subscribe((res: HttpResponse<any>) => {
      localStorage.setItem('userId',res.body.userId);
      console.log(res);
      this._router.navigate(['/admin']);
      this._dialogRef.close();
    })
  }
}
