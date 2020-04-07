import { Component, Input } from '@angular/core';
import {  AdComponent} from './ad.component';

@Component({
  
  template: `
    <div class="restaurant-review">
    <h3> Restaurant Review</h3>
    <h4>{{data.name}}</h4>

    <p>{{data.rating}}</p>

    <strong> Make your reservation today!</strong>
    </div>
  `,
  styles: []
})
export class WesRestaurantReviewComponent implements AdComponent {

 @Input() data: any; 

}
