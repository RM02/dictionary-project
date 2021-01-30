import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardComponent } from './shared/card/card.component';
import { EnlacesComponent } from './shared/enlaces/enlaces.component';
import { SearchComponent } from './shared/search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [CardComponent, EnlacesComponent, SearchComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
  	CardComponent,
  	EnlacesComponent,
  	SearchComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
