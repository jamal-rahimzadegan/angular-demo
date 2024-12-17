import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TestPipe } from '../pipes/test.pipe';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  // Order of imports is important
  imports: [CommonModule, FormsModule], //to declare which external components, directives, and pipes are needed for that specific component to function correctly.
  // providers: [HeaderService], // Lets you specify which services should be available to that specific component and its children.
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() name = '';
  @Input() error = '';

  constructor() {}
}
