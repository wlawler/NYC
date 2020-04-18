import { Directive,ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appTdirective]'
})
export class TdirectiveDirective {

  constructor( private el: ElementRef) {}
//highlighting upon mouse hover
   @Input() highlightColor: string; 
   @HostListener('mouseenter') onMouseEnter() {
     this.highlight('yellow');
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.highlight(null);
   }

   private highlight(color: string) {
     this.el.nativeElement.style.backgroundColor = color;
   }

}
