import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TestPipe } from '../pipes/test.pipe';
import { FormatDirective } from '../directives/directives';
import { InputComponent } from '../input-component/input.component';
// It's a reusable component
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  standalone: true,

  // Order of imports is important
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    TestPipe,
    FormatDirective,
    InputComponent,
  ], //to declare which external components, directives, and pipes are needed for that specific component to function correctly.
  providers: [], // Lets you specify which services should be available to that specific component and its children.
  styleUrl: './post.component.css',
})
export class PostComponent {
  // @Input() means you can pass data from the outside to it, like Props in React components
  @Input() title = '';
  @Input() desc = '';
  @Input() img = '';
  @Output() onSelect = new EventEmitter<any>(); // Use any or a specific type
  isSelected = false;

  handleSelect() {
    this.isSelected = !this.isSelected;
    this.onSelect.emit({ title: this.title }); // wil be passed like: (onSelect)="selectPost($event)"
  }
}
