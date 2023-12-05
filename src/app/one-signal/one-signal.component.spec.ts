import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSignalComponent } from './one-signal.component';

describe('OneSignalComponent', () => {
  let component: OneSignalComponent;
  let fixture: ComponentFixture<OneSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneSignalComponent]
    });
    fixture = TestBed.createComponent(OneSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
