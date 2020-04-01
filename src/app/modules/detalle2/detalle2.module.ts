import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Detalle2RoutingModule } from './detalle2-routing.module';
import { Prueba4Module } from '../../shared_alternativo/prueba4/prueba4.module';
import { Detalle2Component } from './detalle2.component';


@NgModule({
  declarations: [Detalle2Component],
  imports: [
    CommonModule,
    Detalle2RoutingModule,
    Prueba4Module
  ]
})
export class Detalle2Module { }
