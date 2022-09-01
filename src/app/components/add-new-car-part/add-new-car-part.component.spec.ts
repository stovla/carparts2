import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddNewCarPartComponent } from './add-new-car-part.component';

describe('AddNewCarPartComponent', () => {
  let component: AddNewCarPartComponent;
  let fixture: ComponentFixture<AddNewCarPartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCarPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCarPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
