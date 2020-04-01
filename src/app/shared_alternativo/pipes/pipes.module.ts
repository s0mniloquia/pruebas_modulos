import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';
import { Truncate1Pipe } from './truncate1.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [TruncatePipe, Truncate1Pipe],
  exports: [TruncatePipe, Truncate1Pipe]
})
export class PipesModule { }
