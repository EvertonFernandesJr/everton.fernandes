import { Component, HostListener, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from '@layoutC/header/header.component';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { LayoutService } from '@layoutS/layout.service';
import { LoadingService } from '@sharedS/loading/loading.service';
import { RouterService } from '@sharedS/router/router.service';
import { TranslocoService } from '@ngneat/transloco';
import { SidebarComponent } from '@layoutC/sidebar/sidebar.component';
import { LoadingComponent } from '@sharedC/loading/loading.component';
import { ToastMessageComponent } from '@sharedC/toast-message/toast-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div
      class="surface-ground"
      *ngIf="layoutService.mainViewClass$ | async as mainViewClass"
    >
      <ng-container *ngIf="routerService.routerEvents$ | async">
        <ng-container *ngIf="routerService.activatedRoute$ | async" />
      </ng-container>

      <p-toast
        [breakpoints]="{
          '500px': { width: '90%', marginRight: '0rem', marginLeft: '1%' }
        }"
        [showTransformOptions]="'translateX(95%)'"
        [baseZIndex]="10000"
      ></p-toast>

      <app-header />

      <ng-container *ngIf="isLoading$ | async as isLoading">
        <app-loading />
      </ng-container>

      <div class="content">
        <app-sidebar />

        <div class="main-view" [ngClass]="mainViewClass">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styles: [``],
  imports: [
    HeaderComponent,
    NgIf,
    SidebarComponent,
    NgClass,
    ToastMessageComponent,
    LoadingComponent,
    RouterOutlet,
    AsyncPipe,
    ToastModule,
    SidebarModule,
    ButtonModule,
  ],
  providers: [TranslocoService, RouterService, MessageService],
})
export class AppComponent implements OnInit {
  public readonly layoutService = inject(LayoutService);

  public readonly routerService = inject(RouterService);

  public readonly loadingService = inject(LoadingService);

  public isLoading$!: Observable<boolean>;

  public windowSize = window.innerWidth;

  constructor(private primengConfig: PrimeNGConfig) {}

  public ngOnInit(): void {
    this.isLoading$ = this.loadingService.isLoading$;
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.windowSize = window.innerWidth;
  }
}
