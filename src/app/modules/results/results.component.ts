import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryServiceService } from 'src/app/dictionary-service.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  model:any[] = [];
  list_of_word:any = [];
  loading:boolean = true;
  mode: ProgressSpinnerMode = 'indeterminate';
  value: number = 50;

  constructor(
      private activeRoute: ActivatedRoute,
      private router: Router,
      private Api: DictionaryServiceService
    ) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.queryParams['word']) {
      console.log(this.activeRoute.snapshot.queryParams['word'])
      this.activeRoute.queryParams
      .subscribe(params => {
        this.getData(params['word'])
      })
    }
  }

  getData(key:string) {
    setTimeout(() => {
      this.Api.getWord(key)
      .subscribe((data:any) => {
        if (data['data'].length) {
          this.model = data['data']
          this.list_of_word = data['list']
          this.loading = false
        } else {
          this.Api.getWord(key)
          .subscribe((data:any) => {
            this.model = data['data']
            this.list_of_word = data['list']
            this.loading = false
          })
        }
      })
    }, 500)
  }
  buttonEvent() {
    this.router.navigate([''])
  }

}
