import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taches = [];
  inputTache2 = null;
  constructor() { }

  ngOnInit() {
  }

  public ajoutTache(): void {
    if ( this.inputTache2 ) {
      this.taches.push(this.inputTache2);
      this.inputTache2 = null;
    }
  }

  public SuppTache(indexTache: number): void {
    this.taches.splice(indexTache, 1);
  }
}
