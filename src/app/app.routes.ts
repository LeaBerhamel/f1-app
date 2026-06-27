import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'drivers', loadComponent: () => import('./pages/drivers/drivers.component').then(m => m.DriversComponent) },
  {
    path: 'drivers/:sessionKey/:id',
    loadComponent: () =>
      import('./pages/driver-detail/driver-detail.component')
        .then(m => m.DriverDetailComponent)
  },
  {
    path: 'standings',
    loadComponent: () =>
      import('./pages/standings/standings.component')
        .then(m => m.StandingsComponent)
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./pages/schedule/schedule.component')
        .then(m => m.ScheduleComponent)
  }
];
