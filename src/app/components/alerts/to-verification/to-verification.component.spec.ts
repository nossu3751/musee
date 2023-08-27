import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToVerificationComponent } from './to-verification.component';

describe('ToVerificationComponent', () => {
  let component: ToVerificationComponent;
  let fixture: ComponentFixture<ToVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
