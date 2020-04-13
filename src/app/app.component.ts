import { Component, OnInit, Injector } from '@angular/core';
import { AdNyService } from './ad-for-me/ad-ny-service.service';
import { AdItem} from './ad-for-me/ad-item';
import { createCustomElement} from '@angular/elements' ;
import { PopupService} from './element-conversion/popup.service';
import { PopupComponent} from './element-conversion/popup.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NYC';

  ads: AdItem[];

  constructor(private adNyService: AdNyService,
              injector: Injector, public popup: PopupService) {
                //convert 'PopupComponent' to a custom element. 
                const PopupElement = createCustomElement(PopupComponent, {injector}); 
                // Register the custom element with the browser. 
                customElements.define('popup-element', PopupElement); 
              }


  ngOnInit() {
   this.ads = this.adNyService.getAds();
}
}
