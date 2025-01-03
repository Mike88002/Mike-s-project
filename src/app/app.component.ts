
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FirebaseService } from './servizi/firebase.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
      selector: 'app-root',
      standalone: true,
      imports: [
       CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        HttpClientModule
        ],
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css',],
      providers: [FirebaseService]
    })
    
    export class AppComponent implements OnInit, OnDestroy{
      title(title: any) {
        throw new Error('Method not implemented.');
      }

      ngOnInit(): void {
        
      }
      
      ngOnDestroy() : void {
        
      }
      
      constructor(private http : HttpClient){}

      }
  
        
      
