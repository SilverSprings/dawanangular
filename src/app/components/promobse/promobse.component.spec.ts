import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromobseComponent } from './promobse.component';

describe('PromobseComponent', () => {
  let component: PromobseComponent;
  let fixture: ComponentFixture<PromobseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromobseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromobseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
