import {Component, Input, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'app-child',
    template:`
    <div class="container">
      <div class="row">
      <h3>Child Area</h3>
      <h2>{{username}}</h2>
      </div>
      <button type="button" class="btn btn-danger btn-md" (click)="Action()">Click Me</button>
    </div>
    <input type="text" placeholder="enter your name"
     #username
    >
    <input type="text" placeholder="enter your name"
     #email
    >
    <button type="button" class="btn btn-info btn-md" (click)="Data(username.value, email.value)">Click Me</button>
    
    `
})
export class ChildComponent {
   @Input() public username:string;
    public email:string = 'vs@gmail.com';
   @Output() public item = new EventEmitter();
    constructor(){
        // console.log(this.item.emit('vipul'));
    }
    Action(){
this.item.emit(this.email);
console.log(this.item.emit(this.email));
    };
    Data(uname,uemail){
        console.log(`${uname} and ${uemail}`);
    }
}