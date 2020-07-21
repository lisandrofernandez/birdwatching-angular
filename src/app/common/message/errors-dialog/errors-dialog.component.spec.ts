import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDialogComponent } from './errors-dialog.component';

describe('ErrorsDialogComponent', () => {
  let component: ErrorsDialogComponent;
  let fixture: ComponentFixture<ErrorsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
