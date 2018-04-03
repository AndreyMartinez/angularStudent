import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//component
import { AppComponent } from './app.component';
import {ElementComponent} from './elementOne/element.component'
import {SecondComponent} from './elementTwo/second.component'
import {ElementTestComponent} from './elementTest/elementTest.component'

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    SecondComponent,
    ElementTestComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
