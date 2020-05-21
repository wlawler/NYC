import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NightlifeComponent } from './Night/nightlife/nightlife.component';
import { ToDoComponent } from './Reserve/To-Do/to-do/to-do.component';
import { DayOneComponent } from './Reserve/day-one/day-one.component';
import { DayTwoComponent } from './Reserve/day-two/day-two.component';
import { DayThreeComponent } from './Reserve/day-three/day-three.component';
import { DayFourComponent } from './Reserve/day-four/day-four.component';
import { DayFiveComponent } from './Reserve/day-five/day-five.component';


const routes: Routes = [
  {path: 'nightlife', component: NightlifeComponent}, 
  {path: 'to do', component: ToDoComponent},
  {path: 'Day One', component: DayOneComponent},
  {path: 'Day Two', component: DayTwoComponent},
  {path: 'Day Three', component: DayThreeComponent},
  {path: 'Day Four', component: DayFourComponent},
  {path: 'Day Five', component: DayFiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
