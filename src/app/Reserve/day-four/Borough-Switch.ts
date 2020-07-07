import {Component, Input} from '@angular/core';
import {Borough} from './borough'; 

@Component({
    selector: 'app-Rich-Borough', 
    template: 'You are rich. Must be nice' 
})

export class RichBoroughComponent {
    @Input() borough: Borough; 
}

@Component({
    selector: 'app-Hip-Borough', 
    template: 'You are hip. What is your favorite IPA' 
})

export class HipBoroughComponent {
    @Input() borough: Borough; 
}

@Component({
    selector: 'app-Dominican-Borough', 
    template: 'You are Dominican. Quieres Bailar Conmingo' 
})

export class DominicanBoroughComponent {
    @Input() borough: Borough; 
}

@Component({
    selector: 'app-Drunk-Borough', 
    template: 'You are Drunk.' 
})

export class DrunkBoroughComponent {
    @Input() borough: Borough; 
}

@Component({
    selector: 'app-Lost-Borough', 
    template: 'Are you lost?' 
})

export class LostBoroughComponent {
    @Input() borough: Borough; 
}


export const BoroughSwitchComponent  = 
[RichBoroughComponent,HipBoroughComponent,DominicanBoroughComponent,DrunkBoroughComponent,LostBoroughComponent

]; 