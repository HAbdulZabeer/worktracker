import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../administrator/components/login/login.component';
import { SignupComponent } from '../administrator/components/signup/signup.component';
import { ForgotPasswordComponent } from '../administrator/components/forgot-password/forgot-password.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorModule { }
