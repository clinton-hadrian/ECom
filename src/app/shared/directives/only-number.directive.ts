import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumber]',
  standalone: true,
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ];

    // Allow navigation keys (backspace, delete, arrows, tab)
    if (allowedKeys.includes(event.key)) {
      return;
    }

    // Allow only numeric keys (0-9)
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault(); // Ignore invalid input
    }
  }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.el.nativeElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    // Set the input value directly
    input.value = sanitizedValue;

    // Update the form control value
    this.control.control?.setValue(sanitizedValue, { emitEvent: false });
  }
}
