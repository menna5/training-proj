import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  transform(value: string, limit: number): unknown {
    if (!value) return '';
    if (value.length <= limit) return value;

    return value.slice(0, limit);
  }
}
