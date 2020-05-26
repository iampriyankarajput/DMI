import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from "./services/api.service";
import { AuthGuard } from "./services/auth.guard";

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/Search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatFormFieldModule, FormsModule, ReactiveFormsModule,
    MatIconModule, MatInputModule
  ],
  providers: [ApiService, AuthGuard,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
