import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {
  lang: string;
  devi: string;

  date = new Date();
  constructor() { }

  ngOnInit() {
  }

  public selectedLang(lang: string): void {
    this.lang = lang;
  }

  public selectedDevi(devi: string): void {
    this.devi = devi;
  }
}
