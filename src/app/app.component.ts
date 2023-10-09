import { Component, OnInit,} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Create a Task';
  task:any[]=[]

 ngOnInit(): void {
 
  const taskJson = localStorage.getItem('taskName');

  if (taskJson) {
    try {
      this.task = JSON.parse(taskJson);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  } else {
    console.warn('No item with key "taskName" in local storage');
  }
  
 }
 
 
  

  
}
