import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileValidateComponent } from '@src/app/fileValidate/file-validate/file-validate.component';

describe('FileValidateComponent', () => {
  let component: FileValidateComponent;
  let fixture: ComponentFixture<FileValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
