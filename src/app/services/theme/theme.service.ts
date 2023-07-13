import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {

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

    document.body.setAttribute('data-theme', 'light');

    localStorage.setItem('LUCAS_P_PROFILE_THEME', 'light-theme');
  }

  public setDarkTheme(): void {
    this.isLightTheme = false;

    document.body.setAttribute('data-theme', 'dark');

    localStorage.setItem('LUCAS_P_PROFILE_THEME', 'dark-theme');
  }
}
