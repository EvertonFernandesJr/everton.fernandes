import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ThemeService } from '@sharedS/theme/theme.service';
import { TranslocoService } from '@ngneat/transloco';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (themeService: ThemeService): Function => {
        return (): void => {
          const theme = localStorage.getItem('LUCAS_P_PROFILE_THEME')!;

          if (JSON.parse(theme) === 'light-theme') {
            themeService.setLightTheme();
          } else {
            themeService.setDarkTheme();
          }
        };
      },
      deps: [ThemeService],
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (translocoService: TranslocoService): Function => {
        const defaultLang = 'pt';

        const languageKey = 'LUCAS_P_PROFILE_LANGUAGE';

        return (): void => {
          translocoService.setDefaultLang(defaultLang);

          translocoService.setActiveLang(defaultLang);

          translocoService.setFallbackLangForMissingTranslation({
            fallbackLang: defaultLang,
          });

          const actualLanguage = localStorage.getItem(languageKey)!;

          if (JSON.parse(actualLanguage) !== null) {
            translocoService.setActiveLang(actualLanguage);
          } else {
            localStorage.setItem(languageKey, JSON.stringify(defaultLang));
          }
        };
      },
      deps: [TranslocoService],
    },
  ],
})
export class InitializerModule {}
