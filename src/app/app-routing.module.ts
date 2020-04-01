import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'detalle1',
    loadChildren: () =>
      import('./modules/detalle1/detalle1.module').then(
        m => m.Detalle1Module
      )
  },
  {
    path: 'detalle2',
    loadChildren: () =>
      import('./modules/detalle2/detalle2.module').then(
        m => m.Detalle2Module
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
