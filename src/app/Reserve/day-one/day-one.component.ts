import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    
     this.settestNgClasses();
  this.setCurrentStyles();
  
  }


  madeRed = true;
  madeUnderlined = false;
  //This is a test of NgClass, changes the text to red font color and underlined-->// 
  testNgClasses: {};
  settestNgClasses()  {
  this.testNgClasses  = {
    makeMeRed: this.madeRed,
    makeMeUnderlined: this.madeUnderlined,
  }
  };
  //CSS Styles set per current state of component properties 
  CurrentStyles: {}; 
  setCurrentStyles () {
  this.CurrentStyles = {
  'font-color': !this.madeRed ? 'Red' : 'Blue',
  'text-decoration': this.madeUnderlined ?'underline' : 'line-through',
  
  };

}
}