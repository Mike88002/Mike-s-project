import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { PersoneService } from '../../persone.service';
import { subscribe } from 'diagnostics_channel';
import {interval, map, Observable, timer} from 'rxjs'
@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {
   id: number | undefined
   persona:any;
  valoreiniziale : number = 10

  constructor(private route: ActivatedRoute, private serviziopersone : PersoneService){}
  
  
  
  ngOnInit(): void {
    
   
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = +params.get('id')!
      this.persona = this.serviziopersone.getPersona(this.id)
    })
    
  }
}
