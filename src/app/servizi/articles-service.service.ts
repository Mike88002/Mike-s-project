import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  constructor(private http: HttpClient) { }

  getArticles(searchValue: string): Observable <ArticleInterface[]> {
    return this.http.get<ArticleInterface[]>(`https://api.escuelajs.co/api/v1/products`)
    .pipe(
      map((products) => {
        return products.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
    );
  }
}

export interface ArticleInterface {
  id:string;
  slug:string;
  title:string;
}

  
