import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): any {
    // return value.splice(1);
    // console.log('param', param);
    console.log('Array in Pipe - ', value);
    return value.sort((a, b) => a > b ? 1 : -1);
  }

}
