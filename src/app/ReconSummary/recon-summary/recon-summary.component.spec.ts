import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconSummaryComponent } from '@src/app/ReconSummary/recon-summary/recon-summary.component';

describe('ReconSummaryComponent', () => {
  let component: ReconSummaryComponent;
  let fixture: ComponentFixture<ReconSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
