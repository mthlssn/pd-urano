import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercambioComponent } from './intercambio.component';

describe('IntercambioComponent', () => {
  let component: IntercambioComponent;
  let fixture: ComponentFixture<IntercambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntercambioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
