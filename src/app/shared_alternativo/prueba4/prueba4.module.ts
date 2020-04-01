import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prueba4Component } from './prueba4.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, PipesModule
  ],
  declarations: [Prueba4Component],
  exports: [Prueba4Component],
  
})
export class Prueba4Module { }
