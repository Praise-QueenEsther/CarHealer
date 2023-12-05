import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextedRouteComponent } from './nexted-route.component';

describe('NextedRouteComponent', () => {
  let component: NextedRouteComponent;
  let fixture: ComponentFixture<NextedRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextedRouteComponent]
    });
    fixture = TestBed.createComponent(NextedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
