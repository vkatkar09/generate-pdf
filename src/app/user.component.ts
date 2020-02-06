import {Component} from '@angular/core';
@Component({
    selector: 'app-user',
    template:`
    <ul *ngIf="userDetails" cccardD>
    <li>{{userDetails.name | uppercase | lowercase}}</li>
    <li>{{userDetails.price | currency:'EUR'}}</li>
    <li>{{userDetails.number | number}}</li>
    <li>{{userDetails.fltno | number: '2.2-2'}}</li>
    <li>{{userDetails.date | date:'dd/MM/yyyy'}}</li>
    <li>{{userDetails | json}}</li>
    </ul>
    <hr/>
    <p>{{para | content:'25'}}</p>
    <img src="{{imgUrl | imgHttp:'http://lorempixel.com/400/200/' : false}}"/>
    `
})

export class UserComponent {
    public imgUrl:string = '';
    public para:string = 'Indias biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Jewelry, Home, Furniture, Sporting goods, Beauty';
    public userDetails = {
              name: 'Ricky Rich',
              price:2545475,
              number:5456454555,
              fltno:6.897568,
              date:new Date()
    };
    constructor(){}
}