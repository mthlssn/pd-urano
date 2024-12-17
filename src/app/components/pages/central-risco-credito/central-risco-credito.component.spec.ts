import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralRiscoCreditoComponent } from './central-risco-credito.component';

describe('CentralRiscoCreditoComponent', () => {
  let component: CentralRiscoCreditoComponent;
  let fixture: ComponentFixture<CentralRiscoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralRiscoCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralRiscoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
