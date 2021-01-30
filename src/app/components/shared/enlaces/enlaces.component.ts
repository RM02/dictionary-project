import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent implements OnInit {
  
  @Input() data:any[] = []

  constructor() { }

  ngOnInit(): void {
  
  }

}
