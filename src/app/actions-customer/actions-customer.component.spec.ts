import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsCustomerComponent } from './actions-customer.component';

describe('ActionsCustomerComponent', () => {
  let component: ActionsCustomerComponent;
  let fixture: ComponentFixture<ActionsCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsCustomerComponent]
    });
    fixture = TestBed.createComponent(ActionsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
