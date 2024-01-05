import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreactiveformComponent } from './loginreactiveform.component';

describe('LoginreactiveformComponent', () => {
  let component: LoginreactiveformComponent;
  let fixture: ComponentFixture<LoginreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginreactiveformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
