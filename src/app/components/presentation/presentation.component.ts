import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  name = 'Stéphane';

  product = {name: 'Pomme', price: 12.90};

  html = '<strong> Je suis dansgereux ! </strong>';

  message = null;

  users = ['Antoine', 'Damien', 'Gael', 'Severine', 'Audrey', 'Tristan', 'Lam', 'Jean Marc'];

  constructor() { }

  ngOnInit() {
  }

  public uppercase(chaine: string): string {
    return chaine.toUpperCase();
  }

  public clicked(): void {
    alert('bravo');
  }

  public confirmation(event: MouseEvent): void {
    console.log( event.clientX );
    console.log( event.clientY );
    event.preventDefault();
    console.log( confirm('Etes vous sur sur?'));
    console.log( 'Mouse Event Triigered');
  }

  public showMessage(): void {
    console.log(this.message);
  }

  public focusBlur(chaine: string): void {
    console.log(chaine);
  }
}
