import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCurrencyComponent } from './detalle-currency.component';

describe('DetalleCurrencyComponent', () => {
  let component: DetalleCurrencyComponent;
  let fixture: ComponentFixture<DetalleCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCurrencyComponent]
    });
    fixture = TestBed.createComponent(DetalleCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
