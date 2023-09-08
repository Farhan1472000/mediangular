import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorynameComponent } from './categoryname.component';

describe('CategorynameComponent', () => {
  let component: CategorynameComponent;
  let fixture: ComponentFixture<CategorynameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorynameComponent]
    });
    fixture = TestBed.createComponent(CategorynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
