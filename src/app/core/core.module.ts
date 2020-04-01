import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponentCoreComponent } from './prueba-component-core/prueba-component-core.component';



@NgModule({
  declarations: [PruebaComponentCoreComponent],
  exports: [PruebaComponentCoreComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
