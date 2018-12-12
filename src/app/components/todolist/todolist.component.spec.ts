import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import {FormsModule} from '@angular/forms';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistComponent ], imports: [FormsModule]
    })
    .compileComponents();
  }));

  // Va s'éxécuter avant chacune des actions, et donc des it()
  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title h2 should be "To do List"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('To do List');
  });

  it('check button ajouter', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn').textContent).toContain('Ajout');
  });

  it('count buttons', () => {
    component.taches = ['task1', 'task2', 'task3']; // On force dans le component l'attribut taches à avoir 3 strings
    fixture.detectChanges();                        // Forcer le render à mettre à jour la vue et donc créer les balises html
    const compiled = fixture.debugElement.nativeElement;
    const buttons = compiled.querySelectorAll('div.list-group > button');
    expect(buttons.length).toBe(3);
  });
});
