import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshIconComponent } from './refresh-icon.component';

describe('RefreshIconComponent', () => {
  let component: RefreshIconComponent;
  let fixture: ComponentFixture<RefreshIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefreshIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
