import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _webReqService: WebRequestService, _router: Router) { }

  login(username: string, password: string) {
    return this._webReqService.signin(username, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        const userId = res.body._id;
        const token = res.body.token;        //it should be like that : const token = res.headers.get('token');
        if (token) {
          this.setSession(token, userId);
        }
        else {
          console.error("Incomplete response data");
        }
      })
    )
  }

  signup(username: string, email:string, password:string, role:string){
    return this._webReqService.singup(username,email, password , role).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        const userId = res.body._id;
        const username = res.body.username;
        const email = res.body.email;
        const password = res.body.password;
        const role = res.body.role;
        console.log(userId,username,email,password,role);
      })
    )
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    this.removeSession();
  }

  private setSession(token: string, userId: string) {
    localStorage.setItem('token', token);
  }

  private removeSession() {
    localStorage.removeItem('token');
     localStorage.removeItem('userId')
  }

  isLoggedIn(){
    return this.getToken()!= null;
  }

}
