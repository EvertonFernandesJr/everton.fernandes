import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
import { SwitchComponent } from '@sharedC/switch/switch.component';
import { LanguageService } from '@sharedS/language/language.service';
import { StorageService } from '@sharedS/storage/storage.service';

@Component({
  selector: 'app-header-actions',
  template: `
    <div class="flex-none w-auto flex gap-4 align-content-center align-items-center mr-2">
      <div class="cursor-pointer">
        <app-switch />
      </div>

      <div class="" (click)="changeLanguage('en')" *ngIf="activeLanguage === 'pt'">
        <img src="assets/images/brazil-flag.png" />
      </div>

      <div class="" (click)="changeLanguage('pt')" *ngIf="activeLanguage === 'en'">
        <img src="assets/images/eua-flag.png" />
      </div>
    </div>
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
    SwitchComponent,
    HeaderActionsComponent,
    ButtonModule,
    BadgeModule,
    TooltipModule,
    OverlayPanelModule,
    InputTextModule,
  ],
  providers: [LanguageService],
})
export class HeaderActionsComponent implements OnInit {
  private readonly storageService = inject(StorageService);

  public readonly layoutService = inject(LayoutService);

  private readonly translocoService = inject(TranslocoService);

  private readonly languageService = inject(LanguageService);

  public windowSize = window.innerWidth;

  public activeLanguage!: string;

  public staticMenuActive!: boolean;
  public staticMenuActive$ = this.layoutService.staticMenuActive$.pipe(
    tap(response => (this.staticMenuActive = response))
  );

  public ngOnInit(): void {
    this.activeLanguage = this.languageService.getActualSelectedLanguage();
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.windowSize = window.innerWidth;
  }

  public changeLanguage(value: string): void {
    this.activeLanguage = value;
    this.translocoService.setActiveLang(value);
    this.storageService.setStorageItem('LUCAS_P_PROFILE_LANGUAGE', value);
  }
}
