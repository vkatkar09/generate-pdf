import {Component} from '@angular/core';
@Component({
    selector: 'app-property',
    template:`
    
    <button type="button" class="btn btn-primary btn-md"
    (click)="contentArea='home'"
    >Home</button>
    <button type="button" class="btn btn-info btn-md"
    (click)="contentArea='about'"
    >About</button>

    <div *ngIf="contentArea" 
     [ngSwitch]="contentArea"
    >
    <div *ngSwitchCase="'home'">
    <h2>This is home section</h2>
    </div>
    <div *ngSwitchCase="'about'">
    <h2>This is about section </h2>
    </div>
    <h3 *ngSwitchDefault>Not Found</h3>
    </div>
    



    <h2 *ngIf="username.length > 5; else notFound">{{username}}</h2>
    <ng-template #notFound>
    <h2>Not found any username</h2>
    </ng-template>
    <ul>
    <li *ngFor="let course of courses; let i=index ">
   {{i+1}} - {{course}}
    </li>
    </ul>

    <hr/>
    <ul *ngFor="let user of users">
<li>{{user.name }}</li>
<li>{{user.id}}</li>
<li>{{user.email}}</li>
<ol *ngFor="let session of user.sessions">
<li> batch - {{session.batch}}</li>
</ol>
    </ul>
    <hr/>

  <div class="col-md-6">
  <div class="card text-left">
  <div class="card-body">
    <h4 class="card-title">
    <ng-content select=".title"></ng-content>
    </h4>
    <p class="card-text">
    <ng-content select=".body"></ng-content>
    </p>
  </div>
</div>
  </div>  
    `
})

export class PropertyComponent {
    public username:string = 'Vipuls';
    public contentArea:string;
    public courses:string[] = ["Angular", "Typescript", "Javascript", "Css", "React", "mongodb"];
    public users = [{
        name:'manyabhai',
        id:1,
        email:'manya@gmail.com'
    },{
    sessions:[{
       batch:1
    },
 {
     batch:2
 },
 {
     batch:3
 }
],
},
    {
        id:2,
        name:'manibehn',
        email:'manibehn@yahoo.com'
    },
    {
        id:3,
        name:'rimjhimvarsha',
        email:'v@outlook.com'
    },
    {
        id:4,
        name: 'johndoe',
        email:'john@rediff.com'
    }
];
    constructor(){}
}