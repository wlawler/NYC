import { Injectable } from '@angular/core';
import {ToDoInterface} from '../app/Reserve/To-Do/to-do-interface';
import {ToDoSet} from '../app/Reserve/To-Do/to-do/to-do-set';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor() { }

  getTasks(): Observable<ToDoInterface[]> {
    return of(ToDoSet)
  }
}
