import { Component, OnInit } from '@angular/core';
import { Borough} from './borough';

@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.css']
})
export class DayFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  boroughs: Borough[]; 

  currentBorough: Borough;
}
