import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dictionaryApp';
  data: any;

  showResults(data:any) {
  	this.data = data
  }
}
