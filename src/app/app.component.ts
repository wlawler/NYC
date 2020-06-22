import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
//import { AdNyService } from './ad-for-me/ad-ny-service.service.tx';
//import { AdItem} from './ad-for-me/ad-item.tx';
import { createCustomElement} from '@angular/elements' ;
import { resetFakeAsyncZone } from '@angular/core/testing';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NYC';

  FrontPagePic =  'https://imgur.com/a/V8VaZIE'; 

  //ads: AdItem[];

  color ='red';

 /* constructor(private adNyService: AdNyService,
              injector: Injector, public popup: PopupService) {
                //convert 'PopupComponent' to a custom element. 
                const PopupElement = createCustomElement(PopupComponent, {injector}); 
                // Register the custom element with the browser. 
                customElements.define('popup-element', PopupElement); 
              }

*/
  ngOnInit() {
  // this.ads = this.adNyService.getAds();
  this.settestNgClasses();
  this.setCurrentStyles();
}

myResetFunction(event) {
  alert("Event is bound");
}
pop = '8000000';



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
