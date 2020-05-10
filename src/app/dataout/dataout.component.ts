import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dataout',
  templateUrl: './dataout.component.html',
  styleUrls: ['./dataout.component.css']
})
export class DataoutComponent implements OnInit {

  // This is to demonstrate the passing of data from the child component to the parent component using @output decorator and event
  // Step 1. To create an event to pass the data to the parent component
  @Output() public childData = new EventEmitter();

  // Step 2. Add a button to trigger the event in the corresponding html file dataout.component.html

  // Step 3. Define the event function
  callEvent()
  {
    this.childData.emit('Hello from the child component dataout');
  }

  // step 4 Capture it in the parent component app

  constructor() { }

  ngOnInit(): void {
  }

}
