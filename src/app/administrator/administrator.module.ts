import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../administrator/components/login/login.component';
import { SignupComponent } from '../administrator/components/signup/signup.component';
import { ForgotPasswordComponent } from '../administrator/components/forgot-password/forgot-password.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class AdministratorModule { }
