import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearsComponent } from './wears.component';

describe('WearsComponent', () => {
  let component: WearsComponent;
  let fixture: ComponentFixture<WearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
