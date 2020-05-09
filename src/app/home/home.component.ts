import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName = 'Sanjeev';
  lastName = 'Athalye';
  flag = false;
  param = false;
  color = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

}
