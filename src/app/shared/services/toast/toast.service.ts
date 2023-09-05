import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export type MessageSeverity = 'success' | 'warning' | 'danger';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public showMessage$ = new BehaviorSubject<boolean>(false);
  public message$ = new BehaviorSubject<string>('');
  public messageSeverity$ = new BehaviorSubject<string>('success');

  public showMessageHandler(severity: MessageSeverity, message: string): void {
    this.messageSeverity$.next(severity);
    this.message$.next(message);
    this.showMessage$.next(true);
  }

  public dismissMessage(): void {
    this.showMessage$.next(false);
  }
}
