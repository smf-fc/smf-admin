import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CheckInComponent} from './components/check-in/check-in.component';
import {CashComponent} from './components/cash/cash.component';
import {MatchComponent} from './components/match/match.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'check-in/:id',
    component: CheckInComponent,
  },
  {
    path: 'matches',
    component: MatchComponent,
  },
  {
    path: 'cash',
    component: CashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
