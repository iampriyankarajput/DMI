import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url of the server 
  url: string = "https://reqres.in/api";
  constructor(private http: HttpClient, private router: Router) { }
 
  // user login api
  signIn(user: User) {
    return this.http.post<any>(this.url + '/login/', user)
  }

  // add new user to server 
  signUp(user: User) {
    return this.http.post<User>(this.url + '/register/', user)
  }

  // get token from localStorage
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken != null);
  }
  // remove token from localStroage
  doLogOut() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

}
