import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { filter } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements  OnInit {

  readonly users = {
    data: [
      {
        status: 'active',
        age:14,
      },
      {
        status: 'inactive',
        age:34,
      },
      {
        status: 'active',
        age:54,
      }
    ]
  };

   ngOnInit(): void {
     //gli observable sono lazy, quindi non vengono eseguiti finchè non viene chiamato il subscribe
      //this.observable.subscribe(this.observer);
      
   }
  
}
