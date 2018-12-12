import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private static KEY = 'auth';

  constructor() { }

  public  login() {
    localStorage.setItem(AuthentificationService.KEY, '0987879877');
    return true;
  }

  public  state() {
    return localStorage.getItem(AuthentificationService.KEY) != null;
  }

  public  logout() {
    localStorage.removeItem(AuthentificationService.KEY);
    return false;
  }
}
