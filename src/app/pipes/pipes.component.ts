import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  myName = 'Sanjeev Athalye';
  myDate = new Date();
  student = { name: 'Harshal' };
  bigNumber = 12345678;

  constructor() { }

  ngOnInit(): void {
  }

}
