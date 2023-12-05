import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRequestComponent } from './list-of-request.component';

describe('ListOfRequestComponent', () => {
  let component: ListOfRequestComponent;
  let fixture: ComponentFixture<ListOfRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfRequestComponent]
    });
    fixture = TestBed.createComponent(ListOfRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
