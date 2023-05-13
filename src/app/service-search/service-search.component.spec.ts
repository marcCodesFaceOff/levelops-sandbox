import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSearchComponent } from './service-search.component';

describe('ServiceSearchComponent', () => {
  let component: ServiceSearchComponent;
  let fixture: ComponentFixture<ServiceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceSearchComponent]
    });
    fixture = TestBed.createComponent(ServiceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
