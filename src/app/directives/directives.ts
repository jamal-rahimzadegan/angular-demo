import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[onBlur]', // This will be used as a custom attribute in HTML
  standalone: true, // Mark the directive as standalone
})
export class FormatDirective {
  // Note: wi used alias so we can directly pass the case to the onBlur function
  @Input('onBlur') format: string = ''; // @Input('format') format: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    console.log(this.format);

    if (this.format == 'uppercase') {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
    }
  }
}
