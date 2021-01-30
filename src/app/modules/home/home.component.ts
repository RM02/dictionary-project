import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryServiceService } from 'src/app/dictionary-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  activated:boolean;
  loading: boolean;
  model:any[] = [];
  list_of_word: any = [];

  constructor(private router: Router, private Api: DictionaryServiceService) {
    this.activated = true
    this.loading = false
  }

  ngOnInit() {}

  showResults(data:any) {
    this.loading = true
    setTimeout(() => {
      this.model = data
      this.loading = false
    }, 2000)
    this.router.navigate(['results'])
  }

}
