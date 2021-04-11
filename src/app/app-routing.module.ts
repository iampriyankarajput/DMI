import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/Search/search.component';
import { AuthGuard } from "./services/auth.guard";
import { SignupComponent } from './components/signup/signup.component';
import { DrgDropComponent } from './components/drg-drop/drg-drop.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path : "drag", component: DrgDropComponent },
  { path: "search",component: SearchComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
