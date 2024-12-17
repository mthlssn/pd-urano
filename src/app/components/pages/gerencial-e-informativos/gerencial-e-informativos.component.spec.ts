import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencialEInformativosComponent } from './gerencial-e-informativos.component';

describe('GerencialEInformativosComponent', () => {
  let component: GerencialEInformativosComponent;
  let fixture: ComponentFixture<GerencialEInformativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerencialEInformativosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerencialEInformativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
