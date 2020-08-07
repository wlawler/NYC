import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NightlifeComponent } from './Night/nightlife/nightlife.component';
import{ BoroughSwitchComponent} from './Reserve/day-four/Borough-Switch';

//import { AdnyDirective } from './ad-for-me/adny.directive';
//import { AdBannerComponent } from './ad-for-me/ad-banner.component';
//import { WesTourAdComponent } from './ad-for-me/wes-tour-ad.component';
//import { WesRestaurantReviewComponent } from './ad-for-me/wes-restaurant-review.component';
//import { AdNyService} from './ad-for-me/ad-ny-service.service';


import { ToDoComponent } from './Reserve/To-Do/to-do/to-do.component';

import { DayOneComponent } from './Reserve/day-one/day-one.component';
import { DayTwoComponent } from './Reserve/day-two/day-two.component';
import { DayThreeComponent } from './Reserve/day-three/day-three.component';
import { DayFourComponent } from './Reserve/day-four/day-four.component';
import { DayFiveComponent } from './Reserve/day-five/day-five.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component'; 
import {FormsModule} from '@angular/forms';
import { GoalComponent } from './Reserve/day-five/goal/goal.component';
import {KeyPressComponent, KeyDownComponent, KeyEnterComponent, KeyBlurComponent} from './Reserve/day-two/keypress.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    FormsModule, 
  ],
  providers: [//AdNyService,
  ],
  
  declarations: [AppComponent,
    NightlifeComponent,
    KeyPressComponent,
    KeyDownComponent,
    KeyEnterComponent,
    KeyBlurComponent,
    

   // AdnyDirective,

  //  AdBannerComponent,

 //   WesTourAdComponent,

  //  WesRestaurantReviewComponent,

   

   

    ToDoComponent,

    DayOneComponent,

    DayTwoComponent,

    DayThreeComponent,

    DayFourComponent,

    DayFiveComponent,

    ResetCounterComponent,

    BoroughSwitchComponent,

    GoalComponent
  
  ],
  entryComponents: [/*WesTourAdComponent, WesRestaurantReviewComponent */, ],
 
  bootstrap: [AppComponent],

  
})
export class AppModule { 
  constructor () {}
}
