import {Component } from '@angular/core'

@Component({
  selector:'testCli',
  templateUrl:'test.component.html',
  styleUrls:['test.component.scss']
})

export class TestComponent{
  public listaElemento = 'Este es un componente adicional que funciona';
  public nombre:string ='Raphael Andrey Martínez Velasquez';
  public edad:number = 22;
  public hombre:boolean=true;
  public personas:Array<any>= [
'raphael',
'martinez',
'edad'

  ] 
  constructor(){
        this.testMetodo();
      }

      testMetodo(){
        console.log(this.personas);
      }
}