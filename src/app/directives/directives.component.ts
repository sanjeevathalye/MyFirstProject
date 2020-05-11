import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  flag = false;

// Thw below declaration will be used to display the name of the person and his country with the color according to his country
  // using ngSwitch directive in the corresponding html

  persons: any[] = [
    {name: 'Sanjeev', country: 'India'},
    {name: 'Mohammed', country: 'Pakistan'},
    {name: 'Daniel', country: 'USA'},
    {name: 'Gorbachov', country: 'Russia'},
    {name: 'Darwin', country: 'USA'},
    {name: 'Sarah', country: 'UK'},
    {name: 'Munchin', country: 'Germany'},
    {name: 'Ramesh', country: 'India'}
  ];

  employees: any[] = [
    {id: '101', name: 'Sanjeev', gender: 'male', role: 'Project Manager'},
    {id: '102', name: 'Satish', gender: 'male', role: 'Technical Lead'},
    {id: '103', name: 'Akshay', gender: 'male', role: 'Developer'},
    {id: '104', name: 'Arpita', gender: 'female', role: 'Developer'},
    {id: '105', name: 'Mounika', gender: 'female', role: 'Business Analyst'},
    {id: '106', name: 'Veena', gender: 'female', role: 'QA Engineer'}
  ];

  toggle(): void {
    this.flag = !this.flag;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
