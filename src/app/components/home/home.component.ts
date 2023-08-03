import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ContentComponent],
  template: `
    <div class="main">
      <aside class="sidebar">
        <app-sidebar />
      </aside>

      <div class="content">
        <app-content />
      </div>
    </div>
  `,
  styles: [``],
})
export class HomeComponent {}
