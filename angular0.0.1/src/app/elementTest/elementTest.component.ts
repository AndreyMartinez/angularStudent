import {Component} from '@angular/core'
import {users} from './elementTest'

@Component({
selector:"elementTest",
templateUrl:"./elementTest.html"

})
export class ElementTestComponent{
    age:number
    name:string
    
    
    exportForm(){
    let usersUtil = new users(this.name,this.age);
    console.log(usersUtil)
    }
}