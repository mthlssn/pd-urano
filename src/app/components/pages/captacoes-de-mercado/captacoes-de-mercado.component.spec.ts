import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacoesDeMercadoComponent } from './captacoes-de-mercado.component';

describe('CaptacoesDeMercadoComponent', () => {
  let component: CaptacoesDeMercadoComponent;
  let fixture: ComponentFixture<CaptacoesDeMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptacoesDeMercadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptacoesDeMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
