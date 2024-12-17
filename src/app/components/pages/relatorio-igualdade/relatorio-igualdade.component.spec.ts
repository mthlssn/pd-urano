import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioIgualdadeComponent } from './relatorio-igualdade.component';

describe('RelatorioIgualdadeComponent', () => {
  let component: RelatorioIgualdadeComponent;
  let fixture: ComponentFixture<RelatorioIgualdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioIgualdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioIgualdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
