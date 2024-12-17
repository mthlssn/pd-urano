import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InssComponent } from './inss.component';

describe('InssComponent', () => {
  let component: InssComponent;
  let fixture: ComponentFixture<InssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
