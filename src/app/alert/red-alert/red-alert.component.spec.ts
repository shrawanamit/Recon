import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedAlertComponent } from '@src/app/alert/red-alert/red-alert.component';

describe('RedAlertComponent', () => {
  let component: RedAlertComponent;
  let fixture: ComponentFixture<RedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
