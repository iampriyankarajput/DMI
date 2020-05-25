import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HereMapComponent } from './components/Search/search.component';
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "search",component: HereMapComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
