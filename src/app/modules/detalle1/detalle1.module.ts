import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Detalle1RoutingModule } from './detalle1-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Detalle1Component } from './detalle1.component';


@NgModule({
  declarations: [Detalle1Component],
  imports: [
    CommonModule,
    Detalle1RoutingModule,
    SharedModule
  ]
})
export class Detalle1Module { }
