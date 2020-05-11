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
  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
