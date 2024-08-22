import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreofenologicoComponent } from './monitoreofenologico.component';

describe('MonitoreofenologicoComponent', () => {
  let component: MonitoreofenologicoComponent;
  let fixture: ComponentFixture<MonitoreofenologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoreofenologicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoreofenologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
