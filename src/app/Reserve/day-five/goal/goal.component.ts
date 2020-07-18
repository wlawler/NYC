import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {

  @Input() goal:string; //decorate the property with @Input()
}
