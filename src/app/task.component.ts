import {Component} from '@angular/core';
@Component({
    selector: 'app-task',
    template: `
    <div class="container">
    <div class="row">
     <div class="col-md">
     <button type="button" class="btn btn-danger btn-md"
     [disabled]="gender==male"
      (click)="gender=male"
     >Male</button>
     <button type="button" class="btn btn-info btn-md"
     (click)="gender=female"
     [disabled]="gender==female"
     >Female</button>
     </div>
    </div>
    <div *ngIf="gender">
    <img src="{{gender.imgUrl}}"/>
    <h3>{{gender.name}}</h3>
    </div>
    </div>

    
<i class="fa fa-heart fa-3x"
[style.color]="ilike ? 'red': 'grey'"
[class.fa-heart-o]="!ilike"
(click)="LikeHeart()"></i>
    `,
    styles:[`
     .heart {
         color:red
     }
    `]
})

export class TaskComponent {
    public gender:any;
    public ilike:boolean;
    public male = {
        name: 'Manya Bhai',
        imgUrl:'../assets/img/face2.jpg'
    };
    public female = {
        name: 'mani behn',
        imgUrl: '../assets/img/face1.jpg'
    }
constructor(){}
LikeHeart(){
this.ilike = !this.ilike;
}
}