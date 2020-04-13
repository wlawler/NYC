import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popup',
  template: `
   <span> Popup: {{message}} </span>
   <button (click)="closed.next()">&#x2716;</button>
  `,
  host: {
    '[@state]': 'state',
  }, 
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {
  state: 'opened' | 'closed' = 'closed'; 

  @Input()
  set message(message: string) {
    this._message = message; 
    this.state = 'opened'; 
  }
  get message(): string { return this._message; }
  _message: string; 

  @Output()
  closed = new EventEmitter();

  
  
}
