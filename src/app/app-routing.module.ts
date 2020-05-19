import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NightlifeComponent } from './Night/nightlife/nightlife.component';
import { ToDoComponent } from './Reserve/To-Do/to-do/to-do.component';


const routes: Routes = [
  {path: 'nightlife', component: NightlifeComponent}, 
  {path: 'to do', component: ToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
