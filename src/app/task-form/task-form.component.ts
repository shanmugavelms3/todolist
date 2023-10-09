import { Component,Input,OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task:any
  todoform!:FormGroup;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.todoform=this.formBuilder.group({
      taskName:['',Validators.required]
    })
  }

  addTask(){
    this.task.push({
      taskName:this.todoform.value.taskName
    })
    localStorage.setItem('taskName',JSON.stringify(this.task))
      this.todoform.reset()
     console.log(this.task);

}
}
