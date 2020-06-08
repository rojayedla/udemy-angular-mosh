import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

 @HostListener('focus') onFocus() {
     const value: string = this.el.nativeElement.value;
     if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLocaleLowerCase();
     } else {
      this.el.nativeElement.value = value.toUpperCase();
     }
  }
 
}
