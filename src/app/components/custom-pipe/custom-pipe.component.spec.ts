import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeComponent } from './custom-pipe.component';
import {HighlightDirective} from '../../directive/highlight/highlight.directive';
import {PowerPipe} from '../../pipe/power/power.pipe';
import {FormsModule} from '@angular/forms';
import {PipelindromePipe} from '../../pipe/pipelindrome/pipelindrome.pipe';

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipeComponent, PowerPipe, PipelindromePipe ], imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
