import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateComponent } from '../duplicate/duplicate.component';

describe('DuplicateComponent', () => {
  let component: DuplicateComponent;
  let fixture: ComponentFixture<DuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
