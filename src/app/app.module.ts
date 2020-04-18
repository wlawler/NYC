import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NightlifeComponent } from './Night/nightlife/nightlife.component';

import { AdnyDirective } from './ad-for-me/adny.directive';
import { AdBannerComponent } from './ad-for-me/ad-banner.component';
import { WesTourAdComponent } from './ad-for-me/wes-tour-ad.component';
import { WesRestaurantReviewComponent } from './ad-for-me/wes-restaurant-review.component';
import { AdNyService} from './ad-for-me/ad-ny-service.service';
import { PopupComponent } from './element-conversion/popup.component';
import { PopupService} from './element-conversion/popup.service';
import { HdirectiveDirective } from './directive-work/hdirective.directive';
import { TdirectiveDirective } from './directive-work/tdirective.directive'; 


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [AdNyService,
  PopupService],
  
  declarations: [AppComponent,
    NightlifeComponent,

    AdnyDirective,

    AdBannerComponent,

    WesTourAdComponent,

    WesRestaurantReviewComponent,

    PopupComponent,

    HdirectiveDirective,

    TdirectiveDirective,
  
  ],
  entryComponents: [WesTourAdComponent, WesRestaurantReviewComponent, PopupComponent],
 
  bootstrap: [AppComponent],

  
})
export class AppModule { 
  constructor () {}
}
