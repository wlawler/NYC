import { Injectable } from '@angular/core';
import { WesRestaurantReviewComponent} from './wes-restaurant-review.component';
import { WesTourAdComponent} from './wes-tour-ad.component';
import { AdItem} from './ad-item';
 
@Injectable()
export class AdNyService {
  getAds() {
    return [
      new AdItem(WesRestaurantReviewComponent, {name: 'Garozzos', rating: 'spectacular'}),
      new AdItem(WesRestaurantReviewComponent, {name: 'Truth BBQ', rating: 'Amazing'}),

      new AdItem(WesTourAdComponent, {headline: 'Tour NYC with Wes',
                                      body: 'Inquire Today'}),
      new AdItem(WesTourAdComponent, {headline: 'Tour NYC with Wes',
                                      body: 'Inquire Today'}),
    ];

  }

  
}
