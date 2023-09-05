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
    <header
      class="glass fixed shadow-3 pt-2 pb-2 pr-2 z-5 h-4rem sm:gap-2 gap-1 w-full flex flex-wrap align-items-center sm:justify-content-between justify-content-center"
    >
      <!-- Logo e botão menu -->
      <div class="flex-none flex align-items-center gap-2">
        <p-button
          (click)="sidebarLayoutToggleHander()"
          icon="pi pi-align-justify"
          styleClass="p-button-rounded p-button-primary p-button-text p-button-lg"
        ></p-button>
      </div>

      <!-- Barra de pesquisa -->
      <!-- <div class="sm:flex-grow-1 flex-grown-0">
        <span class="p-input-icon-right w-full flex aligh-items-center">
          <i class="pi pi-search"></i>
          <input
            pInputText
            type="text"
            class="p-inputtext-md w-full"
            placeholder="{{ 'header.search' | transloco }}"
            [ngModel]="productName"
            (ngModelChange)="productName = $event"
            (keyup.enter)="searchProductsByNameHandler()"
          />
        </span>
      </div> -->

      <!-- Botões -->

      <app-header-actions />
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
    tap((response) => (this.staticMenuActive = response))
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
