import { Component } from '@angular/core'
import { ElementOne} from './elementOne'
@Component({
    selector: 'elementOne',
    templateUrl:'./element.component.html'
    
})

export class ElementComponent{
public numberComponent = "this is my new component";
public trabajos:Array<number>=[1,2,3,7]
public elementsExport :ElementOne;
constructor(){
}

ngOnInit(){
    this.elementsExport = new ElementOne("value","element")
     console.log(this.elementsExport)
}

functionExample(data){
    setTimeout(()=>{
        alert("ok "+data.toUpperCase())
    },3000)
}
}