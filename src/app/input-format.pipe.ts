import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputFormat'
})
export class InputFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
