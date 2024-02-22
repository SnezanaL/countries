import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightify',
  standalone: true
})
export class HighlightifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
