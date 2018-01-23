import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentRentalsComponent } from './apartment-rentals.component';

describe('ApartmentRentalsComponent', () => {
  let component: ApartmentRentalsComponent;
  let fixture: ComponentFixture<ApartmentRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
