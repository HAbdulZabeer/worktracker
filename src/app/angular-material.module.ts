import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule
    ],
    exports:[
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule
    ]
  })
  export class AngularMaterialModule { }