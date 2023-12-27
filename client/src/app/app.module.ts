import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupSigninComponent } from './components/signup-signin/signup-signin.component';
import { AdminSideComponent } from './components/admin-side/admin-side.component';
import { UserSideComponent } from './components/user-side/user-side.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginFormComponent,
    SignupFormComponent,
    SignupSigninComponent,
    AdminSideComponent,
    UserSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
