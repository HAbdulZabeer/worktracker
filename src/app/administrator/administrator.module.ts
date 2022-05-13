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
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

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
    FlexLayoutModule,
    HttpClientModule
  ],
  providers:[
    AuthService
  ]
})
export class AdministratorModule { }
