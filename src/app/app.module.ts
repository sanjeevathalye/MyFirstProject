import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { HomeComponent } from './home/home.component';
import { BinderComponent } from './binder/binder.component';
import { ApiComponent } from './api/api.component';
import { DataoutComponent } from './dataout/dataout.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EvenPipe } from './pipes/pipe/even.pipe';
import { OddPipe } from './pipes/pipe/odd.pipe';

@NgModule({
  declarations: [
   AppComponent,
   CourseComponent,
   HomeComponent,
   BinderComponent,
   ApiComponent,
   DataoutComponent,
   DirectivesComponent,
   PipesComponent,
   EvenPipe,
   OddPipe
   ],

  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
