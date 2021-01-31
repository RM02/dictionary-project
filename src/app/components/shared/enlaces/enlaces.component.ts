import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent implements OnInit {
  
  @Input() data:any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {}

}
