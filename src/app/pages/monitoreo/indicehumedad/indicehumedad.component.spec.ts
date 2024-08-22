import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicehumedadComponent } from './indicehumedad.component';

describe('IndicehumedadComponent', () => {
  let component: IndicehumedadComponent;
  let fixture: ComponentFixture<IndicehumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicehumedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicehumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
