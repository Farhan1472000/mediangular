import { ComponentFixture, TestBed } from '@angular/core/testing';

import { idComponent } from './medicine-id.component';

describe('idComponent', () => {
  let component: idComponent;
  let fixture: ComponentFixture<idComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [idComponent]
    });
    fixture = TestBed.createComponent(idComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
