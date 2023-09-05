import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ThemeService } from '@sharedS/theme/theme.service';
import { TranslocoModule } from '@ngneat/transloco';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-switch',
  template: `
    <div>
      <ng-container *ngIf="isLightTheme; else lightThemeTemplate">
        <div class="cursor-pointer">
          <i
            class="pi pi-moon text-2xl text-blue-500"
            pBadge
            severity="warning"
            (click)="changeThemeHandler('dark')"></i>
        </div>
      </ng-container>
      <ng-template #lightThemeTemplate>
        <div class="cursor-pointer">
          <i
            class="pi pi-sun text-2xl text-yellow-500"
            pBadge
            severity="warning"
            (click)="changeThemeHandler('light')"></i>
        </div>
      </ng-template>
    </div>
  `,
  styles: [``],
  imports: [NgIf, TooltipModule, TranslocoModule],
  standalone: true,
})
export class SwitchComponent implements OnInit {
  public isLightTheme!: boolean;

  constructor(public themeService: ThemeService) {}

  public ngOnInit(): void {
    this.isLightTheme = this.themeService.isLightTheme;
  }

  public changeThemeHandler(theme: 'dark' | 'light'): void {
    this.isLightTheme = theme === 'light' ? true : false;

    this.themeService.changeThemeHandler(theme);
  }
}
