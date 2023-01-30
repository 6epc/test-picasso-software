import { Pipe, PipeTransform } from '@angular/core';

import { Company } from './companies.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(cashArr: Company[], search: string, searchKeysArr: string[]): Company[] | null {
    if (!search.trim()) {
      return null
    }

    return cashArr.filter((item:any) => {
      let itemFound = false;
      for (let i = 0; i < searchKeysArr.length; i++) {
        if (item[searchKeysArr[i]].toLowerCase().includes(search.toLowerCase())) {
          itemFound = true;
        }
      }
      return itemFound;
    })
  }

}
