import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const inputValue: string = this.el.nativeElement.value;
    const uppercasedValue = inputValue.toUpperCase();
    this.el.nativeElement.value = uppercasedValue;
  }
}
