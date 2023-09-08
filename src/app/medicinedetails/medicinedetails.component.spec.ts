import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedetailsComponent } from './medicinedetails.component';

describe('MedicinedetailsComponent', () => {
  let component: MedicinedetailsComponent;
  let fixture: ComponentFixture<MedicinedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinedetailsComponent]
    });
    fixture = TestBed.createComponent(MedicinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
