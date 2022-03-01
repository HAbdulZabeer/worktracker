import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [{
  path:'' ,pathMatch:'full',redirectTo:'home'
},{
  path:'home',component:WelcomeComponent
},{
  path:'login',component:LoginComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'forgot-password',component:ForgotPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministratorRoutingModule {}