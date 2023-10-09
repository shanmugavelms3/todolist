import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input()task:any
  searchText!: string;

  displayedColumns: string[] = ['Task', 'Confirm','Delete'];

  deleteItem(element: any){
    this.task.forEach((value: any,index: any)=>{
      if(value == element)
      this.task.splice(index,1)
    })
    localStorage.setItem('taskName',JSON.stringify(this.task));
    console.log(element);
   
    

  }

}
