import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../administrator/components/login/login.component';
import { SignupComponent } from '../administrator/components/signup/signup.component';
import { ForgotPasswordComponent } from '../administrator/components/forgot-password/forgot-password.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from '../dashboard/components/profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class AdministratorModule { }
