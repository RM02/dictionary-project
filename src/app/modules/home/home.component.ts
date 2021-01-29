import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionaryServiceService } from 'src/app/dictionary-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  model:any[] = [];

  list_of_word: any = [];

  constructor(private route: ActivatedRoute, private Api: DictionaryServiceService) { }

  ngOnInit() {
  	this.route.queryParams
  	.subscribe(params => {
      this.getData(params['word'])

    })
  }

  getData(key:string) {
    this.Api.getWord(key)
    .subscribe((data:any) => {
       this.model = data['data']
       this.list_of_word = data['list']
    })
  }

  showResults(data:any) {
  	this.model = data
  }

}
