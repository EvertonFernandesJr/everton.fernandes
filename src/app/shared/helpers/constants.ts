import {
  EnvironmentProviders,
  inject,
  isDevMode,
  makeEnvironmentProviders,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  defaultProviders,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
} from '@ngneat/transloco';
import { map, Observable } from 'rxjs';
import { TranslocoHttpLoader } from '@sharedS/transloco-http-loader/transloco-http-loader.service';

export function getPathParam(name: string): string {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.snapshot.params[name];
}

export function getPathParam$(name: string): Observable<string> {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.params.pipe(map((value) => value[name]));
}

export function provideTransloco(): EnvironmentProviders {
  return makeEnvironmentProviders([
    defaultProviders,
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'pt'],
        defaultLang: 'pt',
        fallbackLang: 'pt',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        failedRetries: 2,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ]);
}
