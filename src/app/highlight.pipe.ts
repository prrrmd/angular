import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, city: string, pincode: string): string {
    return pincode + '-' + city;
  }

}
