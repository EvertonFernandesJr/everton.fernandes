import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent {
  public readonly router = inject(Router);

  public readonly actualYear = new Date().getFullYear();
}
