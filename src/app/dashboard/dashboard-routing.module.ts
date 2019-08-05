import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'steps', loadChildren: '../steps/steps.module#StepsModule' },
      { path: 'tracking', loadChildren: '../tracking/tracking.module#TrackingModule' },
      { path: 'results', loadChildren: '../results/results.module#ResultsModule' },
      { path: 'auth', loadChildren: '../pages/pages.module#PagesModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
