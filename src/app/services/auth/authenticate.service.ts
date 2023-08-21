import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  loggedinUser: string | null = null;
  
  constructor() { }

  login(user: string) {
    this.loggedinUser = user;
    
  }
  logout() {
    this.loggedinUser = null;
  }

}
