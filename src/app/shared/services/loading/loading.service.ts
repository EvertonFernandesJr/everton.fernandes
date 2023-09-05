import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isLoadingSubject = new BehaviorSubject(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  public setIsLoading(): void {
    setTimeout(() => {
      this.isLoadingSubject.next(true);
    }, 0);
  }

  public setIsNotLoading(): void {
    setTimeout(() => {
      this.isLoadingSubject.next(false);
    }, 0);
  }
}
