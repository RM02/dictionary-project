import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ResultsComponent } from './results.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
  	ResultsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    ComponentsModule,
    MatProgressSpinnerModule
  ]
})
export class ResultsModule { }
