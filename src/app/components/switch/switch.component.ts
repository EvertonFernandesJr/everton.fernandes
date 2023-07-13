import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  imports: [NgIf],
  standalone: true,
})
export class SwitchComponent implements OnInit {

  public isLightTheme!: boolean;

  constructor(public themeService: ThemeService) {}

  public ngOnInit(): void {
    this.isLightTheme = this.themeService.isLightTheme;
  }

  public changeThemeHandler(theme: 'dark' | 'light'): void {

    this.isLightTheme = theme === 'light' ? true : false;

    this.themeService.changeThemeHandler(theme);
  }
}
