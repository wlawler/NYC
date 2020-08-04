import {Component} from '@angular/core'; 

@Component({
    selector: 'app-key-press',
    template: `
    <input (keyup)="onKey($event)"> 
    <p>{{value}}</p>
`
})
export class KeyPressComponent {

    value=''; 

    onKey(event: KeyboardEvent) {
        this.value += (event.target as HTMLInputElement).value ;
    }
}

@Component({
    selector: 'app-key-down',
    template: `
    <input (keydown)="onKeyDown($event)"> 
    <p>{{value_2}}</p>
`
})
export class KeyDownComponent {

    value_2=''; 

    onKeyDown(event: KeyboardEvent) {
        this.value_2 += (event.target as HTMLInputElement).value ;
    }
}
@Component({
    selector: 'app-key-enter',
    template: `
    <input #box (keyup.enter)="onEnter(box.value)"> 
    <p>{{value}}</p>
`
})
export class KeyEnterComponent {

    value=''; 

    onEnter(value:string) { this.value = value;
    }
}

@Component({
    selector: 'app-key-blur',
    template: `
    <input #box (keyup.enter)="update(box.value)"
    (blur)="update(box.value)"> 
    <p>{{value}}</p>
`
})
export class KeyBlurComponent {

    value=''; 

    update(value:string) { this.value = value;
    }
}