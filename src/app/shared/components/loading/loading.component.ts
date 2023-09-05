import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="loading z-5 fixed top-0 right-0 bottom-0 left-0 opacity-70 flex justify-content-center"
    >
      <p-progressSpinner
        styleClass="w-6rem h-6rem"
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      ></p-progressSpinner>
    </div>
  `,
  styles: [
    `
      @keyframes loading {
        to {
          transform: rotate(1turn);
        }
      }

      .loading {
        background: grey;

        display: flex;
        align-items: center;
        justify-content: center;

        &__content {
          display: flex;
          justify-content: center;
          width: 150px;
          height: 150px;

          &::after {
            content: '';
            width: 60px;
            height: 60px;
            border: 10px solid var(--grey-light-color-5);
            border-top-color: var(--primary-color-dark);
            border-radius: 50%;
            animation: loading 1s ease infinite;
          }
        }
      }

      .message {
        display: flex;
        justify-content: center;
        align-items: center;

        &__text {
          text-align: center;
        }
      }
    `,
  ],
  imports: [ProgressSpinnerModule],
})
export class LoadingComponent {
  @Input({ required: false }) public loadingMessage = '';
}
