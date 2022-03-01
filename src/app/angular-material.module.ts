import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    exports:[
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule
    ]
  })
  export class AngularMaterialModule { }