import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckInComponent} from './check-in.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [CheckInComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatSnackBarModule
  ]
})
export class CheckInModule {
}
