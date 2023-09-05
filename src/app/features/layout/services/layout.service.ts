import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const menuActiveState: Record<string, boolean> = {
  'main-view-menu-active': true,
  'main-view-menu-inactive': false,
};

const menuInactiveState: Record<string, boolean> = {
  'main-view-menu-active': false,
  'main-view-menu-inactive': true,
};

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public staticMenuActive = true;
  public staticMenuActiveSubject = new BehaviorSubject<boolean>(
    this.staticMenuActive
  );
  public staticMenuActive$ = this.staticMenuActiveSubject.asObservable();

  public overlayMenuActive = false;
  public overlayMenuActiveSubject = new BehaviorSubject<boolean>(
    this.overlayMenuActive
  );
  public overlayMenuActive$ = this.overlayMenuActiveSubject.asObservable();

  public mainViewClass = true;
  public mainViewClassSubject = new BehaviorSubject<Record<string, boolean>>(
    menuActiveState
  );
  public mainViewClass$ = this.mainViewClassSubject.asObservable();

  public onMenuToggle(): void {
    this.removeStaticMenu();
    this.staticMenuActive = !this.staticMenuActive;
    this.staticMenuActiveSubject.next(this.staticMenuActive);

    this.updateMenuViewClass();
  }

  public removeStaticMenu(): void {
    this.overlayMenuActive = !this.overlayMenuActive;
    this.overlayMenuActiveSubject.next(this.overlayMenuActive);
  }

  public updateMenuViewClass(): void {
    if (this.staticMenuActive) {
      this.mainViewClassSubject.next(menuActiveState);
    } else {
      this.mainViewClassSubject.next(menuInactiveState);
    }
  }
}
