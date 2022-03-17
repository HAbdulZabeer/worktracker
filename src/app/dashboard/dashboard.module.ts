import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardlistComponent } from './components/dashboardlist/dashboardlist.component';
import { CalenderComponent } from './components/calender/calender.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import {NgChartsModule} from 'ng2-charts';
import { AddpopupComponent } from './components/addpopup/addpopup.component'


@NgModule({
  declarations: [
    DashboardlistComponent,
    CalenderComponent,
    TodolistComponent,
    DashboardCardComponent,
    AddpopupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
