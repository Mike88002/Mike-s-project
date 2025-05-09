import { CommonModule } from '@angular/common';
import  { Component, computed, input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
        selector: 'app-main',
        standalone: true,
        imports: [RouterOutlet, CommonModule],
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.css']
      })
export class MainComponent implements OnInit{
  
  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();

  sizeClass = computed(() => {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
    if (isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  })
        
  ngOnInit(): void {
          
  }
}