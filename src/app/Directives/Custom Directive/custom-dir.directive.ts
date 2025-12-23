import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
  host:{
    '(mouseenter)': 'mouseOn()',
    '(mouseleave)': 'mouseOff()'
  }
})
export class CustomDirDirective {
  private el = inject(ElementRef);
  appCustomDir = input('red');
  defaultColor = input('gray');

  constructor() { }

  mouseOn(){
    this.el.nativeElement.style.color = this.appCustomDir();
  }

  mouseOff(){
    this.el.nativeElement.style.color = this.defaultColor();
  }
}
