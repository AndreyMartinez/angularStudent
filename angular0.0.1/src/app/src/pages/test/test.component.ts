import {Component } from '@angular/core'

@Component({
  selector:'testCli',
  templateUrl:'test.component.html',
  styleUrls:['test.component.scss']
})

export class TestComponent{
  public listaElemento = 'Este es un componente adicional que funciona';
  constructor(){

  }
}