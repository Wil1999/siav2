import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoshidrometereologicosComponent } from './datoshidrometereologicos.component';

describe('DatoshidrometereologicosComponent', () => {
  let component: DatoshidrometereologicosComponent;
  let fixture: ComponentFixture<DatoshidrometereologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoshidrometereologicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatoshidrometereologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
