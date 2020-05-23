import { Component, OnInit } from '@angular/core';

import { ToDoSet} from './to-do-set'


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  

  tasks = ToDoSet;

  ngOnInit(): void {
  }

}
