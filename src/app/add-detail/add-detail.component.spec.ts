import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientComponent } from './add-detail.component';

describe('AddClientComponent', () => {
  let component: AddClientComponent;
  let fixture: ComponentFixture<AddClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClientComponent]
    });
    fixture = TestBed.createComponent(AddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
