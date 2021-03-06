import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  word:string;

  constructor(private router: Router) {
    this.word = ''
  }

  sendWord() {
    this.router.navigate(['/results'], {
      queryParams: {
        word: this.word.toUpperCase()
      }
    })
  }
}
