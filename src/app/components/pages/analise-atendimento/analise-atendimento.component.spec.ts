import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseAtendimentoComponent } from './analise-atendimento.component';

describe('AnaliseAtendimentoComponent', () => {
  let component: AnaliseAtendimentoComponent;
  let fixture: ComponentFixture<AnaliseAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseAtendimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
