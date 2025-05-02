import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  constructor(private http: HttpClient) { }

  getArticles(searchValue: string): Observable <ArticleInterface[]> {
    return this.http.get<ArticleInterface[]>(`https://api.escuelajs.co/api/v1/products?title_like=${searchValue}`);
  }
}

export interface ArticleInterface {
  id:string;
  slug:string;
  title:string;
}

  
