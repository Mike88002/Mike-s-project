import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogged = false
  constructor() {
  }
  isAuthenticated(){
   return this.islogged
  }
}

