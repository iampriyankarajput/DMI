import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl: string = "https://staging.sweet2th.app/api";
  constructor(private http: HttpClient, private router: Router) { }

  // user sign in api
  signIn(user: User) {
    return this.http.post<any>(`${this.apiurl}/user/login/`, user)
  } 

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

}
