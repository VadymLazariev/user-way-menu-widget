import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccessibilityMenuModule} from './accessibility-menu/accessibility-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccessibilityMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
