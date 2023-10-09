import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(task: any[], propertyName: string, searchText: string): any[] {
    if (!task) return [];
    if (!searchText || !propertyName) return task;

    searchText = searchText.toLowerCase();

    return task.filter(task => {
      return task[propertyName].toLowerCase().includes(searchText);
    });
  }
}
