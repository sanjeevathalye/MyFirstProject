import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{

  @ViewChild('pizzaTop') pizzaTopping: ElementRef ;

  title = 'myFirstProject';

  // the following variable will be passed to the child component api to display there
  mySchool = 'Pune University';

  ngAfterViewInit(): void {
    this.pizzaTopping.nativeElement.value = 'Pepperoni with Cheese' ;
  }

}

