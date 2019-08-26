import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordDialog } from './home/forgot-password/forgot-password-dialog';
import { RegisterDialog } from './home/register/register-dialog';
import { AlbumList } from '../components/album-list/album-list.component';
import { LocationMap } from '../components/location-map/location-map.component';
import { PublicRoutingModule } from './public-routing.module';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatMenuModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';

import { MaterialModule } from '../common/material.module';
import { SharedModule } from '../common/shared.module';
import { EqualValidator } from '../common/services/equal-validator.directive';


@NgModule({
  declarations: [HomeComponent,ForgotPasswordDialog,RegisterDialog,EqualValidator,AlbumList,LocationMap],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule, MatButtonModule,MatMenuModule,MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MaterialModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [HomeComponent, ForgotPasswordDialog,RegisterDialog],
  bootstrap: [HomeComponent],
  providers:[CookieService]
})
export class PublicModule { }
