import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HereMapComponent } from './here-map/here-map.component';


const routes: Routes = [
  {
    path: "",
    component: HereMapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
