import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActionsComponent } from './header-actions.component';

describe('HeaderActionsComponent', () => {
  let component: HeaderActionsComponent;
  let fixture: ComponentFixture<HeaderActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderActionsComponent]
    });
    fixture = TestBed.createComponent(HeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
