import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Detalle1Component } from './detalle1.component';


const routes: Routes = [
  { path: '', component: Detalle1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle1RoutingModule { }
