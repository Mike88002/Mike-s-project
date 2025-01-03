import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizio-prova.service';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { PersoneService } from '../../persone.service';
import { RouterLink } from '@angular/router';
import  {ContattoComponent} from '../contatto/contatto.component'
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, NgStyle, RouterLink, RouterOutlet],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit{

  persone : any;
  persona : any;
  
  constructor(private servizioProva: ServizioProvaService,
              private serviziopersone : PersoneService
  ){}

ngOnInit(): void {
    
    this.persone = this.serviziopersone.getPersone()

  }
  // console.log(this.route.snapshot.paramMap.get('id'))
  // console.log(this.isprofile)



}



    

