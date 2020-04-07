import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NightlifeComponent } from './Night/nightlife/nightlife.component';

import { AdnyDirective } from './ad-for-me/adny.directive';
import { AdBannerComponent } from './ad-for-me/ad-banner.component';
import { WesTourAdComponent } from './ad-for-me/wes-tour-ad.component';
import { WesRestaurantReviewComponent } from './ad-for-me/wes-restaurant-review.component';
import { AdNyService} from './ad-for-me/ad-ny-service.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdNyService],
  
  declarations: [AppComponent,
    NightlifeComponent,

    AdnyDirective,

    AdBannerComponent,

    WesTourAdComponent,

    WesRestaurantReviewComponent,
  
  ],
  entryComponents: [WesTourAdComponent, WesRestaurantReviewComponent],
 
  bootstrap: [AppComponent],

  
})
export class AppModule { 
  constructor () {}
}
