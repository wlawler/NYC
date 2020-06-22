import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToDoSet} from './to-do-set'
import { ToDoInterface } from '../to-do-interface';
import { ToDoServiceService } from 'src/app/to-do-service.service'


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private toDoServiceService: ToDoServiceService ) { }

  

  //tasks = ToDoSet;
  tasks: ToDoInterface[];

  

  ngOnInit() {
    this.getTasks();
  }

  delete(task: ToDoInterface): void {
    this.tasks = this.tasks.filter(t => t !==task)
  }
  getTasks(): void {
    this.toDoServiceService.getTasks()
     .subscribe(tasks => this.tasks = tasks);
  }
  toggleDisabled(): any{
    let deleteButton = <HTMLInputElement> document.getElementById('deleteButton');
    deleteButton.disabled = !deleteButton.disabled; 
    console.warn(deleteButton.disabled);
  }
  /*
  @output()
  counting = new EventEmitter<any>();

  */

}
