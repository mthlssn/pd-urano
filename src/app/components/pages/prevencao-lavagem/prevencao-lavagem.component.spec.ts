import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevencaoLavagemComponent } from './prevencao-lavagem.component';

describe('PrevencaoLavagemComponent', () => {
  let component: PrevencaoLavagemComponent;
  let fixture: ComponentFixture<PrevencaoLavagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevencaoLavagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevencaoLavagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
