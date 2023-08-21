import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateArtComponent } from './rate-art.component';

describe('RateArtComponent', () => {
  let component: RateArtComponent;
  let fixture: ComponentFixture<RateArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
