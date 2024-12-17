import { Pipe, PipeTransform } from '@angular/core';

// Here we create a custom pipe and we should add it to the declaration
@Pipe({
  name: 'testPipe', // This name will be used in templates
  standalone: true, // Important for standalone components
})
export class TestPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value + ' --> ' + args + '....';
  }
}
