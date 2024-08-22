import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiacionuvComponent } from './radiacionuv.component';

describe('RadiacionuvComponent', () => {
  let component: RadiacionuvComponent;
  let fixture: ComponentFixture<RadiacionuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiacionuvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiacionuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
