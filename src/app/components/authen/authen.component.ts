import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  state: boolean;
  constructor(private authentification: AuthentificationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.state = this.authentification.state();
  }

  public login() {
    this.state = this.authentification.login();

    if (this.route.snapshot.queryParamMap.has('back')) {
      console.log(this.route.snapshot.queryParamMap.get('back'));
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('back'));
    }
  }

  public logout() {
    this.state = this.authentification.logout();
  }
}
