import { Component, HostListener, inject } from '@angular/core';
import { LayoutService } from '@layoutS/layout.service';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { SidebarModule } from 'primeng/sidebar';
import { tap } from 'rxjs/operators';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { LanguageService } from '@sharedS/language/language.service';
import { menuRouteItems } from '@app/config/constants';

@Component({
  selector: 'app-sidebar-content',
  template: `
    <div class="sidebar border-round-lg surface-overlay">
      <div class="flex flex-column justify-content-between p-0 m-0">
        <div class="overflow-hidden">
          <!-- * Menu -->
          <div class="mb-4 pl-0 sm:pl-2 pt-4 flex flex-column gap-0 sm:gap-1">
            <div
              *ngFor="let menuItem of menuRouteItems"
              routerLinkActive="active-route"
              class="mr-2 flex align-items-center border-round-lg p-2 gap-2 cursor-pointer layout-links"
              [routerLink]="menuItem.route"
            >
              <i [ngClass]="menuItem.idLogo" class="text-xl"></i>

              <span class="text-lg">{{ menuItem.i18nAlias | transloco }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .layout-links {
        &:hover {
          background-color: var(--surface-hover);
        }

        &:focus {
          outline: 0 none;
          outline-offset: 0;
          transition: box-shadow 0.2s;
          box-shadow: var(--focus-ring);
        }
      }

      .active-route {
        i,
        span {
          color: var(--blue-500);
        }
      }
    `,
  ],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    RouterModule,
    FormsModule,
    AsyncPipe,
    TranslocoModule,
    CommonModule,
    FormsModule,
    CheckboxModule,
    SliderModule,
    ButtonModule,
    RatingModule,
    SidebarModule,
    MessagesModule,
  ],
  providers: [LanguageService],
})
export class SidebarContentComponent {
  public readonly menuRouteItems = menuRouteItems;

  public readonly layoutService = inject(LayoutService);

  public readonly translocoService = inject(TranslocoService);

  public message: Message[] | undefined;

  public staticMenuActive!: boolean;
  public staticMenuActive$ = this.layoutService.staticMenuActive$.pipe(
    tap((response) => (this.staticMenuActive = response))
  );

  public windowSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.windowSize = window.innerWidth;
  }
}
