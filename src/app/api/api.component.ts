import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  @Input( 'parentData' ) public school ;

  constructor() { }

  ngOnInit(): void {
  }

}
