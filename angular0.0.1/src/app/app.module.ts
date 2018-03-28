import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//component
import { AppComponent } from './app.component';
import {ElementComponent} from './elementOne/element.component'
import {SecondComponent} from './elementTwo/second.component'

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
