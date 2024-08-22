import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvapotranspiracionComponent } from './evapotranspiracion.component';

describe('EvapotranspiracionComponent', () => {
  let component: EvapotranspiracionComponent;
  let fixture: ComponentFixture<EvapotranspiracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvapotranspiracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvapotranspiracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
