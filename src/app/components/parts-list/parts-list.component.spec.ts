import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { PartsDbService } from '../../service/parts-db.service';
import { PartsListComponent } from './parts-list.component';

describe('PartsListComponent', () => {
  let component: PartsListComponent;
  let fixture: ComponentFixture<PartsListComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const partsDbServiceStub = () => ({
      getPartsFromServer: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PartsListComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: PartsDbService, useFactory: partsDbServiceStub }
      ]
    });
    fixture = TestBed.createComponent(PartsListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const partsDbServiceStub: PartsDbService = fixture.debugElement.injector.get(
        PartsDbService
      );
      spyOn(partsDbServiceStub, 'getPartsFromServer').and.callThrough();
      component.ngOnInit();
      expect(partsDbServiceStub.getPartsFromServer).toHaveBeenCalled();
    });
  });

  describe('addNew', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.addNew();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
