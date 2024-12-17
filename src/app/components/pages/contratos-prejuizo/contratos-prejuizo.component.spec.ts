import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosPrejuizoComponent } from './contratos-prejuizo.component';

describe('ContratosPrejuizoComponent', () => {
  let component: ContratosPrejuizoComponent;
  let fixture: ComponentFixture<ContratosPrejuizoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosPrejuizoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosPrejuizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
