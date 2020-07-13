import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalReserveListComponent } from './natural-reserve-list.component';

describe('NaturalReserveListComponent', () => {
  let component: NaturalReserveListComponent;
  let fixture: ComponentFixture<NaturalReserveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalReserveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalReserveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
