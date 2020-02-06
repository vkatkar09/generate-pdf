import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Iusers} from './shared/model/user';
@Component({
    selector: 'app-currentuser',
    template:`
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    <table class="table table-bordered">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let record of records">
            <td>{{record.id}}</td>
            <td>{{record.name}}</td>
            <td>{{record.email}}</td>
        </tr>

    </tbody>
</table>
    </div>
    </div>

    <div class="row">
    <div class="col-md-8">
        <div class="form-group">
          <input type="text"
            class="form-control" placeholder="enter id"
            #id
            >
        </div>
        <div class="form-group">
        <input type="text"
          class="form-control" placeholder="enter name"
          #name
          >
      </div>
      <div class="form-group">
      <input type="text"
        class="form-control" placeholder="enter email"
        #email
        >
    </div>
    <button type="submit" (click)="AddUser(id.value,name.value,email.value)" class="btn btn-danger btn-md">Submit</button>
    </div>
</div>
    </div>
    
    `
})

export class CurrentUsersComponent {
   @Input() public records: Iusers[];
   @Output() public newRecord = new EventEmitter<Iusers>();
    constructor(){}
    AddUser(uId,uname,uemail){
this.newRecord.emit({id:uId, name:uname, email:uemail});
    }
}