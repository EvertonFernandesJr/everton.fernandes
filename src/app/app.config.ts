import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InitializerModule } from './initializer/initializer.module';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providerTransloco } from '@shared/helpers/constants';
import { TranslocoModule } from '@ngneat/transloco';
import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
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
    providerTransloco(),
  ],
};
