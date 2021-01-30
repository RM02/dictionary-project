import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ResultsComponent } from './modules/results/results.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: []
	},
	{
		path: 'results',
		component: ResultsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
