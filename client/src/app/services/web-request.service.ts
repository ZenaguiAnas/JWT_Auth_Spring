import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private _http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080';
  }

  get(uri: string){
    return this._http.get(`${this.ROOT_URL}/${uri}`);
  }
  
  post(uri: string, payload: Object){
    return this._http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  
  put(uri: string, payload: Object){
    return this._http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this._http.delete(`${this.ROOT_URL}/${uri}`);
  }
  
  singup(username:string, email: string, password: string, role:string){
    return this._http.post(`${this.ROOT_URL}/api/auth/signup`,{
      username,
      email,
      password,
      role
    },{
      observe: 'response'
    });
  }
  signin(email: string, password: string){
    return this._http.post(`${this.ROOT_URL}/api/auth/signin`,{
      email,
      password
    },{
      observe: 'response'
    });
  }
}
