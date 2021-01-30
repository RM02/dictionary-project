import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  url:string = '';

  constructor(private router: Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
  	this.url = this.router.url
  }

}
