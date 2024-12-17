import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAtivoComponent } from './controle-ativo.component';

describe('ControleAtivoComponent', () => {
  let component: ControleAtivoComponent;
  let fixture: ComponentFixture<ControleAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleAtivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
