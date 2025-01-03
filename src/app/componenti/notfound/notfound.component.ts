import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  createRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }
  
}
