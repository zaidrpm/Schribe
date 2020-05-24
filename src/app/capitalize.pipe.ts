import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string  {
    let a=value.charAt(0).toUpperCase()
    return a+ value.substring(1)
  }

}
