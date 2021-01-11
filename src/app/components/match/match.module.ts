import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchComponent} from './match.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    MatchComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatPaginatorModule,
  ]
})
export class MatchModule {
}
