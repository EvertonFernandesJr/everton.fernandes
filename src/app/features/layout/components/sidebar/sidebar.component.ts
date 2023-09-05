import { Component, HostListener, inject } from '@angular/core';
import { LayoutService } from '@layoutS/layout.service';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { SidebarModule } from 'primeng/sidebar';
import { tap } from 'rxjs/operators';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { LanguageService } from '@sharedS/language/language.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <ng-container *ngIf="staticMenuActive$ | async"></ng-container>

    <div *ngIf="windowSize < 915">
      <p-sidebar [(visible)]="layoutService.overlayMenuActive">
        <app-sidebar-content />
      </p-sidebar>
    </div>

    <div *ngIf="windowSize >= 915 && staticMenuActive">
      <app-sidebar-content />
    </div>
  `,
  styles: [``],
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
    SidebarContentComponent,
  ],
  providers: [LanguageService],
})
export class SidebarComponent {
  public readonly layoutService = inject(LayoutService);

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
