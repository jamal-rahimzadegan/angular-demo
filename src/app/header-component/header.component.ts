import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TestPipe } from '../pipes/test.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  // Order of imports is important
  imports: [CommonModule, FormsModule, NgFor, TestPipe], //to declare which external components, directives, and pipes are needed for that specific component to function correctly.
  providers: [HeaderService], // Lets you specify which services should be available to that specific component and its children.
})
export class HeaderComponent {
  title = 'Header Component';
  imageUrl = 'https://placehold.co/600x400';
  courses;
  isActive: boolean = true;
  email: string = 'a@test.com';

  constructor(private headerService: HeaderService) {
    this.courses = this.headerService.getCourses();
  }

  onEnter(): void {
    console.log('email', this.email);
  }

  save(): void {
    this.isActive = !this.isActive;
  }
}
