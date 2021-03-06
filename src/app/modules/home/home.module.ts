import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
  	HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    ComponentsModule
  ]
})
export class HomeModule { }
