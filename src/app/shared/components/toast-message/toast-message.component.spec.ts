/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastService } from '@sharedS/toast/toast.service';
import { ToastMessageComponent } from './toast-message.component';

describe('ToastMessageComponent', () => {
  let component: ToastMessageComponent;
  let fixture: ComponentFixture<ToastMessageComponent>;

  beforeEach(() => {
    const toastServiceStub = () => ({ dismissMessage: () => ({}) });
    TestBed.configureTestingModule({
      imports: [ToastMessageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ToastService, useFactory: toastServiceStub }],
    });
    fixture = TestBed.createComponent(ToastMessageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('dismissMessage', () => {
    it('makes expected calls', () => {
      const toastServiceStub: ToastService =
        fixture.debugElement.injector.get(ToastService);
      spyOn(toastServiceStub, 'dismissMessage').and.callThrough();
      component.dismissMessage();
      expect(toastServiceStub.dismissMessage).toHaveBeenCalled();
    });
  });
});
