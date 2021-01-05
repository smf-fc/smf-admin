import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [SidenavComponent],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ]
})
export class SidenavModule {
}
