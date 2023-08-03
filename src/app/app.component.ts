import { Component } from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, ContentComponent],
  template: `
    <div class="grid">
      <aside class="col-12 md:col-3 surface-overlay p-0">
        <app-sidebar />
      </aside>

      <div class="col-12 md:col-9 surface-section p-0">
        <app-content />
      </div>
    </div>
  `,
  styles: [``],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppComponent {}
