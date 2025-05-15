import {MatCardModule} from '@angular/material/card'
import { AfterViewInit, Component,Input, OnInit,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { delay, Observable, from, tap, of, filter, fromEvent, combineLatest, map, mergeMap, exhaustMap, switchMap, catchError } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FirebaseService } from '../../servizi/firebase.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,
    MatCardModule,
     RouterLinkActive, 
     ReactiveFormsModule,
     MatCommonModule,
     MatButtonModule,
     MatSelectModule,
     MatInputModule,
     CommonModule,
     MatFormFieldModule,
    AsyncPipe,
     RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : []
})

export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('search') searchInput: any;

  constructor (private firebase : FirebaseService)  {};  
  
  title = 'mike-project';
  homeform: FormGroup | any
  foo$ = from ([1,2,3,4,5]).pipe(map((item) => item * 10));
  numero= 10;
  oggi = Date.now();

  persone=[
    {nome: 'luca', cognome : 'fort', isonline:true, color: 'yellow'},
    {nome: 'spyro', cognome: 'disney', isonline:true, color: 'yellow'},
    {nome: 'assetto', cognome:'corsa', isonline:true, color: 'yellow'},
    {nome: 'gigio', cognome:'corsa competizione', isonline:true, color: 'yellow',},
    {nome: 'ficarra', cognome:'bello', isonline:true, color: 'yellow'},
    {nome: 'topo', cognome:'corsaevo', isonline:true, color: 'red'},
  ]

  persone$ = of(this.persone);
  filteredpersone$ = this.persone$.pipe(
    filter((persone) => persone.every((persona) => persona.isonline))
  )

  // data$ = combineLatest([
  //   this.persone$,
  //   this.filteredpersone$,
  // ]).pipe(
  //   map(([persone, filteredpersone]) =>({
  //     persone,
  //     filteredpersone
  //   }))
  // );
    
  ngOnInit(): void {
    this.filteredpersone$.subscribe((persone) =>{
    }),

    this.homeform = new FormGroup({
      name: new FormControl('', {nonNullable : true} ),
      email: new FormControl('', {nonNullable : true}),
    })
    // this.addressform  = new FormGroup({
    //   nome : new FormControl (undefined, {nonNullable : true}),
    //   cognome : new FormControl (undefined, {nonNullable : true} ),
    //   address : new FormControl (undefined , {nonNullable : true}),
    //   address2 : new FormControl (undefined, {nonNullable : true}),
    //   city: new FormControl (undefined, {nonNullable : true} ),
    //   state: new FormControl (undefined, {nonNullable : true} ),
    //   postalCode: new FormControl (undefined, {nonNullable : true} ),

    // })
    // 
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input').pipe(
        map((event: any) => event.target.value),
        switchMap((query) => of('risultato ricerca:', query).pipe(
          delay(1000),
          catchError((error) => of('errore di ricerca:', error))
        )
      )
      ).subscribe((result) => console.log(result));
  }
  
  onsubmitta(){
        this.firebase.inserttizi(
          "https://mike-bc1c3-default-rtdb.europe-west1.firebasedatabase.app", 
          {name: this.homeform.value.name, email: this.homeform.value.email}
        ).subscribe(info => {
          console.log('Dati inviati con successo:', info);
        },)    
  
    // this.fire.insertAddress(
    //   'https://mike-bc1c3-default-rtdb.europe-west1.firebasedatabase.app/address.json',
    //   {nome: this.addressform.value.nome, cognome: this.addressform.value.cognome, 
    //    address : this.addressform.value.address, address2: this.addressform.value.address2,
    //   city: this.addressform.value.city, state : this.addressform.value.state,
    //   postalCode : this.addressform.value.postalCode,
    //   }
    // ).subscribe (datindirizzo =>{
    //   console.log(datindirizzo)
    // })
}
  
}
