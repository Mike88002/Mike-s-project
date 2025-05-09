import  { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
        selector: 'app-left-sidebar',
        standalone: true,
        imports: [CommonModule, RouterModule],
        templateUrl: './left-bar.component.html',
        styleUrls: ['./left-bar.component.css']
      })
export class LeftBarComponent{
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routerLink: '',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routerLink: 'about',
      icon: 'fal fa-box-open',
      label: 'Informazioni',
    },
    {
      routerLink: 'login',
      icon: 'fal fa-file',
      label: 'Login',
    },
    {
      routerLink: 'contatti',
      icon: 'fal fa-cog',
      label: 'Contatti',
    },
  ]

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
  
  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}