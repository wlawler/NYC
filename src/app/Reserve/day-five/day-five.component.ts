import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.css']
})
export class DayFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

currentGoal="Find out whose buried in Grant's Tomb"


findOutMessage = ""; 

onFindOut() {
  this.findOutMessage = " Its Grant ";
}
}