import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
})
export class SwitchComponent {
  constructor(public themeService: ThemeService) {}

  public onCheckboxChange(event: Event): void {
    this.themeService.onCheckboxChange(event);
  }
}
