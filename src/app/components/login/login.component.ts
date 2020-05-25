import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  hide = true; 
  error:any=''
  constructor(private authService:AuthService,private fb:FormBuilder,private router:Router,private toastr:ToastrService) {
    this.signinForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit(): void {
  }

  
  loginUser() {
    this.authService.signIn(this.signinForm.value).pipe(
      map((data)=>{
        return data;
      }), 
      catchError( error => {
        let err = Object.values(error.error.data)
        this.error = err[0]
        this.toastr.error(this.error);
       return throwError( err);
     })
    ) .subscribe((res: any) => {
      console.log(res)
      localStorage.setItem('access_token', res.token)
      this.toastr.success('Login Successfully');
        this.router.navigate(['/search' ]);
    })
 

  }

}
