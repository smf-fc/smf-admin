import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AuthButtonComponent} from '../../auth/auth-button/auth-button.component';
import {UserProfileModule} from '../../auth/user-profile/user-profile.module';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthButtonComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UserProfileModule,
    MatMenuModule,
  ]
})
export class HeaderModule {
}
