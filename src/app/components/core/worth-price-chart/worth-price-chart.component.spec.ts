import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorthPriceChartComponent } from './worth-price-chart.component';

describe('WorthPriceChartComponent', () => {
  let component: WorthPriceChartComponent;
  let fixture: ComponentFixture<WorthPriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorthPriceChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorthPriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
