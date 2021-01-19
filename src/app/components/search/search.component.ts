import { Component, OnInit } from '@angular/core';
import { DictionaryServiceService } from 'src/app/dictionary-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  word:string = '';

  model: any;

  constructor(private Api: DictionaryServiceService) {}

  ngOnInit(): void {
  }

  sendWord() {
    this.Api.getWord(this.word)
    .subscribe((data:any) => {
      this.model = data
    })
  }

}
