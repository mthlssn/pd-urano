import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdaComponent } from './dda.component';

describe('DdaComponent', () => {
  let component: DdaComponent;
  let fixture: ComponentFixture<DdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
