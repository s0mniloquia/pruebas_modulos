import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncate5'
})
export class TruncatePipe implements PipeTransform{
  transform(value: string, limite: number): string {
    // tslint:disable-next-line: radix
    return value.length > limite ? `${value.substring(0, limite)}...` :   value;
  }
}