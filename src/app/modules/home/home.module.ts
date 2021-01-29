import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from '../../components/search/search.component';
import { CardComponent } from '../../components/card/card.component';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
  	HomeComponent,
  	HeaderComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatGridListModule
  ]
})
export class HomeModule { }
