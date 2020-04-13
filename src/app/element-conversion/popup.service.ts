import { Injectable, ApplicationRef, ComponentFactoryResolver,Injector } from '@angular/core';
import { NgElement, WithProperties} from '@angular/elements';
import { PopupComponent} from './popup.component';

@Injectable()
export class PopupService {

  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) { }

              // Previous dynamic-loading method required you to set up infrastructure 
              // before adding the popup to the DOM.
  showAsComponent(message: string) {
    //create element
    const popup = document.createElement('popup-component');

    //create the component and wire it up with the element 
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    //Attach to the view so that the change detector knows to run 
    this.applicationRef.attachView(popupComponentRef.hostView);

    //Listen to the close event 
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    //Set the message
    popupComponentRef.instance.message = message; 

    //Add to the DOM 
    document.body.appendChild(popup); 
  }
  // This uses the new custom-element method to add the popup to the DOM.
showAsElement(message: string){
  //create element 
  const popupE1: NgElement & WithProperties<PopupComponent> = document.createElement
  ('popup-element') as any; 

  // listen to the close event 
  popupE1.addEventListener('closed', () => document.body.removeChild(popupE1));

  //Set the message 
  popupE1.message = message; 

  //Add to the DOM 
  document.body.appendChild(popupE1); 
}
}
