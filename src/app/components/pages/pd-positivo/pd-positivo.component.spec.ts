import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdPositivoComponent } from './pd-positivo.component';

describe('PdPositivoComponent', () => {
  let component: PdPositivoComponent;
  let fixture: ComponentFixture<PdPositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdPositivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdPositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
