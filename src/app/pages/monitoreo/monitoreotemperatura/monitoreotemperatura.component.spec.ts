import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreotemperaturaComponent } from './monitoreotemperatura.component';

describe('MonitoreotemperaturaComponent', () => {
  let component: MonitoreotemperaturaComponent;
  let fixture: ComponentFixture<MonitoreotemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoreotemperaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoreotemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
