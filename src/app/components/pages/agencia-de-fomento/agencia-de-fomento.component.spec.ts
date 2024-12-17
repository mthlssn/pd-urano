import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaDeFomentoComponent } from './agencia-de-fomento.component';

describe('AgenciaDeFomentoComponent', () => {
  let component: AgenciaDeFomentoComponent;
  let fixture: ComponentFixture<AgenciaDeFomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciaDeFomentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciaDeFomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
