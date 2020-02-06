    // [style.color]="isActive ? 'green': 'orange'"
    // [style.fontSize] ="isActive ? '45px' : '20px'"

    //[class.content]="isActive"
    //[class.item1]="!isActive"

import {Component} from '@angular/core';
import {Courses} from './courses';
@Component({
    selector:'app-course',
    template:`
    <h1
    [ngStyle]="{
      color: isActive ? 'green' : 'orange',
      fontSize: isActive ? '50px' : '25px'
    }"
    (click)="Action()"
    >{{userName}}</h1>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    <div

[ngClass]="{
  'content': isActive,
  'item1':!isActive
}"

    >
    hello
    </div>

    <span class="fa fa-3x"

    [ngClass]="{
      'fa-heart-o':!activeHeart,
      'fa-heart':activeHeart
    }"
    (click)="HeartLike()"
    ></span>
<img src="{{imgUrl}}" />
    `,
    styles:[`
    h1 {
      color:green;
    }
    .content {
      width:400px;
      height:400px;
      background-color:teal;
    }
    .item1 {
      width:200px;
      height:200px;
      background-color:yellow;
    }
    
    `]
})

export class CourseComponent {
  public isActive:boolean = true;
  public activeHeart:boolean = false;
    public userName:string = 'Vipul Singh';
    public courses:Array<string>;
    public imgUrl:string = '../assets/img/1.jpg';
    // public courses:Array<string> = ['Angular','Typescript', 'Javascript', 'Reactjs'];
  constructor(private course: Courses){
      //never ever ever ever nd ever ever use tight coupling ok...........
    //   let courses = new Courses();
    //   this.courses = courses.getCourse();
    this.courses = course.getCourse();
  };
  Action(){
    this.isActive = !this.isActive;
  };
  HeartLike(){
    this.activeHeart = !this.activeHeart;
  }
}
