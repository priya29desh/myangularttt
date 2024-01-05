import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintemplateformComponent } from './logintemplateform.component';

describe('LogintemplateformComponent', () => {
  let component: LogintemplateformComponent;
  let fixture: ComponentFixture<LogintemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogintemplateformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogintemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
