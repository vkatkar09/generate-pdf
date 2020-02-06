import {Component,Input} from '@angular/core';
@Component({
    selector:'app-heart',
    template:`
    <div class="container">
    <div class="row">
    <div class="col-md-8">
     <span class="fa fa-2x"
     [class.fa-heart-o]="!likeHeart"
     [class.fa-heart]="likeHeart"
     (click)="Like()"     
     ></span> {{count}}

    </div>
    </div>
    <div class="row">
    <div class="col-md-8">
    <div class="header"
    (click)="DropDown()"
    >
     Header
     <span class="fa pull-right"
     [class.fa-chevron-down]="!dropdown"
     [class.fa-chevron-up]="dropdown"
     ></span>
    </div>
    <div class="body" *ngIf="dropdown">
      Body
    </div>
    </div>
    </div>
    </div>
    
    `,
    styles:[`
     .header {
         width:300px;
         height:40px;
         background-color:green;
     }
     .body {
        width:300px;
        height:300px;
        background-color:grey;
     }
    `]
})

export class HeartComponent {
    public likeHeart:boolean = false;
   @Input() public count:number;
   public dropdown:boolean = false;
    constructor(){}
    Like(){
        this.likeHeart = !this.likeHeart;
        this.count += this.likeHeart ? 1 : -1;
    };
    DropDown(){
this.dropdown = !this.dropdown;
    }
}

