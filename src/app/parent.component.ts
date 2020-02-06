import {Component} from '@angular/core';
@Component({
    selector: 'app-parent',
    template:`
    <div class="container">
      <div class="row">
         <h2>Parent:</h2>
         <p>{{emailId}}</p>
      </div>
      <div class="row">
       <h3>Child Section</h3>
       <app-child [username]="name" (item)="AddEmail($event)"></app-child>
      </div>
    </div>
    
    `
})
export class ParentComponent {
    public name:string = "Vipul";
    public emailId:string;
    constructor(){}
    AddEmail(data){
        this.emailId = data;
    }
}