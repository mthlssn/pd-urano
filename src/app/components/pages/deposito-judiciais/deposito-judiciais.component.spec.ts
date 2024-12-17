import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoJudiciaisComponent } from './deposito-judiciais.component';

describe('DepositoJudiciaisComponent', () => {
  let component: DepositoJudiciaisComponent;
  let fixture: ComponentFixture<DepositoJudiciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositoJudiciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoJudiciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
