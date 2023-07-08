import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ContentComponent],
  template: `
    <div class="container">
      <app-sidebar />
      <app-content />
    </div>
  `,
  styles: [
    `
      @import '../../styles/mixins.scss';

      .container {
        background: transparent;
        display: flex;

        @media only screen and (max-width: 640px) {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class HomeComponent {}
