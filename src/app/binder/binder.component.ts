import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-binder',
  templateUrl: './binder.component.html',
  styleUrls: ['./binder.component.css']
})
export class BinderComponent implements OnInit {

  firstName = 'Sharvari';
  lastName = 'Athaye';
  mailID = 'sa@gamil.com';
  hide = true;

  ngOnInit(): void {

  }

  constructor() { }

  show(): void
  {
    this.hide = !this.hide;
  }

  onClick(e)
  {
    console.log(e.value);
  }

  display(ee)
  {
    console.log(ee.value);
  }


}
