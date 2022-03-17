import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardlistComponent } from './components/dashboardlist/dashboardlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [{
  path:'',pathMatch:'full',redirectTo:'home',
  
},{
  path:'home',component:DashboardlistComponent,
  children:[
      {
        path:'',component:DashboardCardComponent
      },
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'list',component:TodolistComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
