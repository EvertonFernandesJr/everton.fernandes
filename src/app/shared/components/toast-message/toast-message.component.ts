import { Component, inject } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ToastService } from '@sharedS/toast/toast.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toast',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  animations: [
    trigger('toastTrigger', [
      state('open', style({ transform: 'translateY(0%)' })),
      state('close', style({ transform: 'translateY(-200%)' })),
      transition('open <=> close', [animate('300ms ease-in-out')]),
    ]),
  ],
  standalone: true,
  imports: [AsyncPipe],
})
export class ToastMessageComponent {
  private readonly toastService = inject(ToastService);

  public readonly showMessage$ = this.toastService.showMessage$;

  public readonly messageSeverity$ = this.toastService.messageSeverity$;

  public readonly message$ = this.toastService.message$;

  public dismissMessage(): void {
    this.toastService.dismissMessage();
  }
}
