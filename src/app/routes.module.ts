import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Everton Fernandes Jr' },
  },
];
