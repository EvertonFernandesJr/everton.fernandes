import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InitializerModule } from './app/initializer/initializer.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { provideTransloco } from '@shared/helpers/constants';

bootstrapApplication(AppComponent, {
  providers: [
    provideTransloco(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      InitializerModule,
      TranslocoModule
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  // eslint-disable-next-line no-console
}).catch((err) => console.error(err));
