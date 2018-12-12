import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../../services/authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class SecureRouteGuard implements CanActivate {

  constructor(private authentification: AuthentificationService, private router: Router ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authentification.state()) {
      return true;
    } else {
      // je vais vers la page d'authentification, puis je lui passe un objet aussi qui nous permettra de revenir en arrière
      this.router.navigate(['/authen'], {queryParams: {'back': state.url}} );
      return false;
    }
  }
}
