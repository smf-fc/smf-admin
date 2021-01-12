import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CheckInComponent} from './components/check-in/check-in.component';
import {CashComponent} from './components/cash/cash.component';
import {MatchComponent} from './components/match/match.component';
import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: MatchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'check-in/:id',
    component: CheckInComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'matches',
    component: MatchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cash',
    component: CashComponent,
    canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
