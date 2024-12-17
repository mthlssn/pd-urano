import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdJudComponent } from './pd-jud.component';

describe('PdJudComponent', () => {
  let component: PdJudComponent;
  let fixture: ComponentFixture<PdJudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdJudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdJudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
