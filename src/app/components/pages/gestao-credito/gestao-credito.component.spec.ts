import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoCreditoComponent } from './gestao-credito.component';

describe('GestaoCreditoComponent', () => {
  let component: GestaoCreditoComponent;
  let fixture: ComponentFixture<GestaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
