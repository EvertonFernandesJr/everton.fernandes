import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public readonly storageService = inject(StorageService<string>);

  public isLightTheme!: boolean;

  public changeThemeHandler(theme: 'dark' | 'light'): void {
    if (theme === 'light') {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  public setLightTheme(): void {
    this.isLightTheme = true;

    this.setThemeByDocument('light');

    this.storageService.setStorageItem('LUCAS_P_PROFILE_THEME', 'light-theme');
  }

  public setDarkTheme(): void {
    this.isLightTheme = false;

    this.setThemeByDocument('dark');

    this.storageService.setStorageItem('LUCAS_P_PROFILE_THEME', 'dark-theme');
  }

  public setThemeByDocument(theme: 'dark' | 'light'): void {
    const themeElement = document.getElementById('theme-css');

    themeElement!.setAttribute('href', `assets/themes/${theme}/theme.css`);
  }
}
