import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutentacaodesistemasComponent } from './sutentacaodesistemas.component';

describe('SutentacaodesistemasComponent', () => {
  let component: SutentacaodesistemasComponent;
  let fixture: ComponentFixture<SutentacaodesistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SutentacaodesistemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SutentacaodesistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
