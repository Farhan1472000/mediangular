import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringNextMnthComponent } from './expiring-next-mnth.component';

describe('ExpiringNextMnthComponent', () => {
  let component: ExpiringNextMnthComponent;
  let fixture: ComponentFixture<ExpiringNextMnthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiringNextMnthComponent]
    });
    fixture = TestBed.createComponent(ExpiringNextMnthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
