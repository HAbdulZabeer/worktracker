import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { CalenderComponent } from './components/calender/calender.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardlistComponent } from './components/dashboardlist/dashboardlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [{
  path:'',pathMatch:'full',redirectTo:'home',
  
},{
  path:'home',component:DashboardlistComponent,
  canActivate:[AuthGuardGuard],
  children:[
      {
        path:'',component:DashboardCardComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'profile',component:ProfileComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'list/:listDate',component:TodolistComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'calendar',component:CalenderComponent,
        canActivate:[AuthGuardGuard]
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
