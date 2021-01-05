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
import { CheckInComponent } from './components/check-in/check-in.component';
import { CashComponent } from './components/cash/cash.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent,
    CheckInComponent,
    CashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    HeaderModule,
    FooterModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
