import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform{
  transform(value: string, limite: number): string {
    debugger;
    // tslint:disable-next-line: radix
    return value.length > limite ? `${value.substring(0, limite)}...` :   value;
  }
}