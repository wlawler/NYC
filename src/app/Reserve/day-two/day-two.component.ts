import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {

  constructor() { }
 
  canSize = true ; 
  canStretch = true; 
  canWeight = true; 
  ngOnInit()  {
    this.setCurrentStyles() ;
    
  }

  currentStyles: {};
  setCurrentStyles(){
    //sets CSS Styles
    this.currentStyles = {
      'font-size': this.canSize  ? '8px' : '64px',
      'font-stretch': !this.canStretch ? 'ultra-condensed' : 'ultra-expanded',
      'font-weight': this.canWeight ? '9' : '900',
    }
  }

}
