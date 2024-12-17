import { Injectable } from '@angular/core';

@Injectable() // Marks a class as available for DI
export class HeaderService {
  getCourses() {
    return ['first', 'second', 'third'];
  }
}
 