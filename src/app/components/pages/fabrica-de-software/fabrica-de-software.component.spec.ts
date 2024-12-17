import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricaDeSoftwareComponent } from './fabrica-de-software.component';

describe('FabricaDeSoftwareComponent', () => {
  let component: FabricaDeSoftwareComponent;
  let fixture: ComponentFixture<FabricaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
