import { AfterViewInit, Component, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FirebaseService } from './servizi/firebase.service';
import { ArticleInterface, ArticlesServiceService } from './servizi/articles-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LeftBarComponent } from './componenti/left-bar/left-bar.component';
import { MainComponent } from "./componenti/main/main.component";

@Component({
      selector: 'app-root',
      standalone: true,
      imports: [
          CommonModule,
          RouterOutlet,
          RouterLink,
          ReactiveFormsModule,
          LeftBarComponent,
          MainComponent
      ],
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css',],
      providers: [FirebaseService]
    })
    
export class AppComponent implements OnInit{

  searchForm!: FormGroup;
  searchValue: string = '';
  articles: ArticleInterface[] = [];

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  @HostListener('window:resize')
  onResize(): void {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() > 768) {
        this.isLeftSidebarCollapsed.set(true);
      }
  }

  //endregion imputs, outputs, signals


  constructor(private articleService: ArticlesServiceService,
              private fb: FormBuilder){}

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
      this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  fetchData(): void{
      const value = this.searchValue;
      if (!value) {
        return;
      }
      this.articleService.getArticles(this.searchValue)
        .subscribe((article) => {
        this.articles = article;
      })
  }
        
  onSearchSubmit(): void {
      this.searchValue = this.searchForm.value.searchValue ?? '';
      this.fetchData();
  }

  //region life cycle

  ngOnInit(): void {
      this.searchForm = this.fb.nonNullable.group({
      searchValue: '',
    });    
  }

  ngAfterViewInit(): void {}

  //endregion life cycle
}