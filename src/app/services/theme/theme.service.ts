import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  public isLightTheme!: boolean;

  public onCheckboxChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
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
