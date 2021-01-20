import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DictionaryServiceService } from 'src/app/dictionary-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  word:string = 'Alba';

  model: any;

  @Output() searchEvent = new EventEmitter<any>();

  constructor(private Api: DictionaryServiceService) {}

  ngOnInit(): void {
    this.sendWord()
    this.word = ''
  }

  sendWord() {
    this.Api.getWord(this.word)
    .subscribe((data:any) => {
      this.searchEvent.emit(data);
      this.model = data
    })
  }

}
