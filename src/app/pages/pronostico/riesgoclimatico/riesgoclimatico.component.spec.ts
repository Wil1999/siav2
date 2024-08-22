import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoclimaticoComponent } from './riesgoclimatico.component';

describe('RiesgoclimaticoComponent', () => {
  let component: RiesgoclimaticoComponent;
  let fixture: ComponentFixture<RiesgoclimaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiesgoclimaticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiesgoclimaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
