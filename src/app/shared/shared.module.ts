import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { Truncate1Pipe } from './pipes/truncate1.pipe';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './components/component/shared.component';
import { Shared1Component } from './components/component1/shared1.component';
import { Shared2Component } from './components/component2/shared2.component';
import { Shared6Component } from './components/component6/shared6.component';
import { Shared7Component } from './components/component7/shared7.component';
import { Shared8Component } from './components/component8/shared8.component';
import { Shared9Component } from './components/component9/shared9.component';
import { Shared10Component } from './components/component10/shared10.component';
import { Shared111Component } from './components/component111/shared111.component';
import { Shared11111Component } from './components/component11111/shared11111.component';
import { Shared12Component } from './components/component12/shared12.component';
import { Shared13Component } from './components/component13/shared13.component';
import { Shared14Component } from './components/component14/shared14.component';
import { Shared16Component } from './components/component16/shared16.component';
import { Shared15Component } from './components/component15/shared15.component';
import { Shared17Component } from './components/component17/shared17.component';
import { Shared18Component } from './components/component18/shared18.component';

@NgModule({
  declarations: [SharedComponent,
    Shared1Component,
    Shared2Component,
    Shared6Component,
    Shared7Component,
    Shared8Component,
    Shared9Component,
    Shared10Component,
    Shared111Component,
    Shared11111Component,
    Shared12Component,
    Shared13Component,
    Shared14Component,
    Shared15Component,
    Shared16Component,
    Shared17Component,
    Shared18Component,
    TruncatePipe,
    Truncate1Pipe],
  exports: [SharedComponent,
    Shared1Component,
    Shared2Component,
    Shared6Component,
    Shared7Component,
    Shared8Component,
    Shared9Component,
    Shared10Component,
    Shared111Component,
    Shared11111Component,
    Shared12Component,
    Shared13Component,
    Shared14Component,
    Shared15Component,
    Shared16Component,
    Shared17Component,
    Shared18Component, TruncatePipe,
    Truncate1Pipe],
  imports: [
    CommonModule, FormsModule
  ]
})
export class SharedModule { }
