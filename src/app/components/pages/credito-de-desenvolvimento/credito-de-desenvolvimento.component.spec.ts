import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoDeDesenvolvimentoComponent } from './credito-de-desenvolvimento.component';

describe('CreditoDeDesenvolvimentoComponent', () => {
  let component: CreditoDeDesenvolvimentoComponent;
  let fixture: ComponentFixture<CreditoDeDesenvolvimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoDeDesenvolvimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoDeDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
