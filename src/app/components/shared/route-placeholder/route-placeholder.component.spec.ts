import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePlaceholderComponent } from './route-placeholder.component';

describe('RoutePlaceholderComponent', () => {
  let component: RoutePlaceholderComponent;
  let fixture: ComponentFixture<RoutePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
