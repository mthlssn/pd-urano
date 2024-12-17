import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDeFundosComponent } from './gestao-de-fundos.component';

describe('GestaoDeFundosComponent', () => {
  let component: GestaoDeFundosComponent;
  let fixture: ComponentFixture<GestaoDeFundosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoDeFundosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoDeFundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
