import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelitegoesComponent } from './satelitegoes.component';

describe('SatelitegoesComponent', () => {
  let component: SatelitegoesComponent;
  let fixture: ComponentFixture<SatelitegoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatelitegoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatelitegoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
