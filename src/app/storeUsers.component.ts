import {Component} from '@angular/core';
import {Iusers} from './shared/model/user';
@Component({
    selector: 'app-storeuser',
    template:`
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    <app-currentuser [records]="usersData" (newRecord)="AddNewUser($event)"></app-currentuser>
    </div>
    </div>
    </div>
    
    `
})

export class StoreUsersComponent {
    public usersData:Iusers[] = [{
        id:1,
        name:'rahul',
        email:'ra@gmail.com'
    },
   {
       id:2,
       name:'john',
       email:'john@gmail.com'
   },
   {
       id:3,
       name:'bear',
       email:'be@yahoo.com'
   }
];
    constructor(){}
    AddNewUser(item: Iusers){
        this.usersData.unshift(item);
    }
}