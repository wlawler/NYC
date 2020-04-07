import { Component, OnInit } from '@angular/core';
import { AdNyService } from './ad-for-me/ad-ny-service.service';
import { AdItem} from './ad-for-me/ad-item'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NYC';

  ads: AdItem[];

  constructor(private adNyService: AdNyService) {} 

  ngOnInit() {
   this.ads = this.adNyService.getAds();
}
}
