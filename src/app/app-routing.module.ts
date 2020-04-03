import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NightlifeComponent } from './Night/nightlife/nightlife.component';


const routes: Routes = [
  {path: 'nightlife', component: NightlifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
