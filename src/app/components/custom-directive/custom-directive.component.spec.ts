import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveComponent } from './custom-directive.component';
import {HighlightDirective} from '../../directive/highlight/highlight.directive';
import {PowerPipe} from '../../pipe/power/power.pipe';

describe('CustomDirectiveComponent', () => {
  let component: CustomDirectiveComponent;
  let fixture: ComponentFixture<CustomDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirectiveComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
