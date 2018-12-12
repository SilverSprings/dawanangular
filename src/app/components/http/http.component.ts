import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../../class/user';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private static URL = 'https://jsonplaceholder.typicode.com';

  users: Array<User>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public loadUser() {

    const httpOptions = {
      headers: new HttpHeaders({
        'X-Token': '0987AZDA464111A',
        'X-Files' : ' ... '
      })
    };
                                                                  // J'ajoute un filtre, un pipe
    this.http.get<User[]>(`${HttpComponent.URL}/users/`, httpOptions).pipe(
        // récupère la réponse du get, qui est un tableau d'utilisateur - map attends toujours un return
        map( (users: User[]) => {
          // récupère chacun des postes pour faire un traitement sur chacun des postes
          return users.map((user: Object) => new User(user));
        })).subscribe( (users: Array<User>) => {
      this.users = users;
      }, (error: HttpErrorResponse) => {console.log(error); }
    );

    /* 2ème manière de faire, avec le pipe async
       users: Observable<User[]>

       et

       this.http.get<User[]>(`${HttpComponent.URL}/users/`, httpOptions).pipe(
        // récupère la réponse du get, qui est un tableau d'utilisateur - map attends toujours un return
        map( (users: User[]) => {
          // récupère chacun des postes pour faire un traitement sur chacun des postes
          return users.map((user: Object) => new User(user));
        }))

        dans la vue : < | async >

       marche aussi avec les promises !

    */

  }
}
