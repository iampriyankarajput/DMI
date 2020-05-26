import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;
  errMsg: any = ''

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.signUpForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

    signUp(){
    this.api.signUp(this.signUpForm.value)
    .pipe( 
      map((data)=>{
        return data;
      }), 
      catchError(error => {
        let err = Object.values(error.error)
        this.errMsg = err[0]
        this.toastr.error(this.errMsg);
        return throwError(err);
      })
    )
    .subscribe((res: any) => {
        console.log(res)
      this.toastr.success('Register Successfully');
      this.router.navigate(['/']);
    }) 
  }

}
