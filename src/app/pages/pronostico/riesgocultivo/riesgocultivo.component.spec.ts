import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgocultivoComponent } from './riesgocultivo.component';

describe('RiesgocultivoComponent', () => {
  let component: RiesgocultivoComponent;
  let fixture: ComponentFixture<RiesgocultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiesgocultivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiesgocultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
