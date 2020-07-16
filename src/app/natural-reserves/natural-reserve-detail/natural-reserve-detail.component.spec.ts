import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalReserveDetailComponent } from './natural-reserve-detail.component';

describe('NaturalReserveDetailComponent', () => {
  let component: NaturalReserveDetailComponent;
  let fixture: ComponentFixture<NaturalReserveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalReserveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalReserveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
