import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private http  : HttpClient) {}
  
  inserttizi (url: string, body : {}): Observable <any>{
    console.log("chiamata arrivataa ",url, "con corpo:", body)
    return this.http.post(url, body).pipe(
      tap(() =>
         console.log('richiesta inviata')),
    );
  }
  
  // insertAddress (url: string, body: {}): Observable <any>{
  //   console.log("chiamata arrivata", body)
  //   return this.http.post(url, body)
  // }


}

