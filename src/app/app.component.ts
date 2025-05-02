import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FirebaseService } from './servizi/firebase.service';
import { ArticleInterface, ArticlesServiceService } from './servizi/articles-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
      selector: 'app-root',
      standalone: true,
      imports: [
       CommonModule,
        RouterOutlet,
        RouterLink,
        ReactiveFormsModule,
        ],
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css',],
      providers: [FirebaseService]
    })
    
    export class AppComponent implements OnInit, OnDestroy{
      searchForm!: FormGroup;
      searchValue: string = '';
      articles: ArticleInterface[] = [];

      
      constructor(private articleService: ArticlesServiceService,
                  private fb: FormBuilder,
                 ){}
  
      fetchData(): void{
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
          this.fetchData();
        }

        ngAfterViewInit(): void {}
        
        ngOnDestroy() : void {}

        //endregion life cycle
      }