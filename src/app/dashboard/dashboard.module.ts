import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardlistComponent } from './components/dashboardlist/dashboardlist.component';
import { CalenderComponent } from './components/calender/calender.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [
    DashboardlistComponent,
    CalenderComponent,
    TodolistComponent,
    AddtodoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
