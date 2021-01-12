import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ContentComponent} from './components/layout/content/content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HeaderModule} from './components/layout/header/header.module';
import {FooterModule} from './components/layout/footer/footer.module';
import {SidenavModule} from './components/layout/sidenav/sidenav.module';
import {CashComponent} from './components/cash/cash.component';
import {CheckInModule} from './components/check-in/check-in.module';
import {MatchModule} from './components/match/match.module';
import {AuthModule} from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent,
    CashComponent,
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'smf.us.auth0.com',
      clientId: '4uZ6GyeSUROUdjNH6HAoQ7uBEoQ5tdb3'
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    HeaderModule,
    FooterModule,
    SidenavModule,
    CheckInModule,
    MatchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
