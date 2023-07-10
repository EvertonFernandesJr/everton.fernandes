import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (themeService: ThemeService): Function => {
        return (): void => {
          const theme = localStorage.getItem('LUCAS_P_PROFILE_THEME')!;

          if (JSON.parse(JSON.stringify(theme)) === 'dark-theme') {
            themeService.setDarkTheme();
          } else {
            themeService.setLightTheme();
          }
        };
      },
      deps: [ThemeService],
    },
  ],
})
export class InitializerModule {}
