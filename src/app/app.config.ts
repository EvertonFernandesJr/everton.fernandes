import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { InitializerModule } from './initializer/initializer.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(InitializerModule),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
