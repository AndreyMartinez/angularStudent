import { Component } from '@angular/core'

@Component({
    selector: 'elementOne',
    templateUrl:'./element.component.html'
    
})

export class ElementComponent{
public numberComponent = "this is my new component";
public trabajos:Array<number>=[1,2,3,7]
}