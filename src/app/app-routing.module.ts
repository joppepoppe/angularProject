import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MapComponentComponent } from './map-component/map-component.component';

const routes: Routes = [
 /*  { path: 'map-component', component: MapComponentComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
