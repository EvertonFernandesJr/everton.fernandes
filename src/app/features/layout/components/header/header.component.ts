import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LayoutService } from '@layoutS/layout.service';
import { tap } from 'rxjs/operators';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HeaderActionsComponent } from '../header-actions/header-actions.component';

@Component({
  selector: 'app-header',
  template: `
    <header class="glass fixed shadow-3 z-5 h-4rem w-full">
      <div class="flex flex-wrap mx-2 h-4rem align-items-center justify-content-between ">
        <p-button
          (click)="sidebarLayoutToggleHander()"
          icon="pi pi-align-justify"
          styleClass="p-button-rounded p-button-primary p-button-text p-button-lg"></p-button>

        <span class="md:text-2xl text-xl font-bold text-primary">Everton Fernandes Jr</span>

        <app-header-actions />
      </div>
    </header>
  `,
  styles: [``],
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
    AsyncPipe,
    JsonPipe,
    TranslocoModule,
    HeaderActionsComponent,
    ButtonModule,
    BadgeModule,
    TooltipModule,
    OverlayPanelModule,
    InputTextModule,
  ],
  providers: [],
})
export class HeaderComponent {
  private readonly router = inject(Router);

  public readonly layoutService = inject(LayoutService);

  private readonly translocoService = inject(TranslocoService);

  public windowSize = window.innerWidth;

  public productName!: string;

  public activeLanguage!: string;

  public staticMenuActive!: boolean;
  public staticMenuActive$ = this.layoutService.staticMenuActive$.pipe(
    tap(response => (this.staticMenuActive = response))
  );

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.windowSize = window.innerWidth;
  }

  public sidebarLayoutToggleHander(): void {
    if (this.windowSize >= 915) {
      this.layoutService.onMenuToggle();
    } else {
      this.layoutService.removeStaticMenu();
    }
  }
  public changeLanguage(value: string): void {
    this.activeLanguage = value;
    this.translocoService.setActiveLang(value);
  }
}
