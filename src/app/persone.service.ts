import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {
  persone = [
    {nome: 'luca', cognome : 'fort', isonline:true, color: 'blue'},
    {nome: 'ernesto', cognome: 'disney', isonline:true, color: 'blue'},
    {nome: 'adads', cognome:'corsa', isonline:true, color: 'blue'},
    {nome: 'qwerty', cognome:'corsa competizione', isonline:true, color: 'blue',},
    {nome: 'assetto', cognome:'bello', isonline:true, color: 'blue'},
    {nome: 'salve', cognome:'corsaevo', isonline:false, color: 'red'},
    
  ]

  constructor(){}

 
  
  
  getPersone(){
    return this.persone;
  }

  getPersona(index: number) {
    return this.persone[index]
}
}
