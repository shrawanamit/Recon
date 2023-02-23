import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalRiceiptComponent } from '@src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component';

describe('DigitalRiceiptComponent', () => {
  let component: DigitalRiceiptComponent;
  let fixture: ComponentFixture<DigitalRiceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalRiceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalRiceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
