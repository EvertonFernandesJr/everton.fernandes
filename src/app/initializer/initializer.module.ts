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
        const fallbackLang = 'pt';

        return (): void => {
          translocoService.setFallbackLangForMissingTranslation({
            fallbackLang: fallbackLang,
          });

          const actualLanguage = localStorage.getItem(
            'LUCAS_P_PROFILE_LANGUAGE'
          )!;

          if (JSON.parse(actualLanguage) !== null) {
            translocoService.setActiveLang(actualLanguage);
          } else {
            localStorage.setItem('LUCAS_P_PROFILE_LANGUAGE', fallbackLang);
            localStorage.setItem(
              'LUCAS_P_PROFILE_LANGUAGE',
              JSON.stringify(fallbackLang)
            );
            translocoService.setActiveLang(fallbackLang);
          }
        };
      },
      deps: [TranslocoService],
    },
  ],
})
export class InitializerModule {}
