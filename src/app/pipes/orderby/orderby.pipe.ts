import {Pipe, PipeTransform} from '@angular/core';
import {orderBy} from 'lodash';

@Pipe({
  standalone: true,
  name: 'orderBy'
})

export class OrderbyPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (!column || column === '') {
      return orderBy(value);
    } // sort 1d array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    const orders = [...order] as string[];

    return orderBy(value, [column]);
  }

}