import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookApartmentComponent } from './book-apartment.component';

describe('BookApartmentComponent', () => {
  let component: BookApartmentComponent;
  let fixture: ComponentFixture<BookApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
