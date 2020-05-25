import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl: string = "https://staging.sweet2th.app/api";
  constructor(private http: HttpClient) { }

  // user sign in
  signIn(user: User) {
    return this.http.post<any>(`${this.apiurl}/user/login/`, user) 
  }
  
}
