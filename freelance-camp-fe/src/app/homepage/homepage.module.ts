import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ]
  providers: [],
  bootstrap: [HomepageComponent]
})
export class HomepageModule {}
