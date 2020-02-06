import { Component, OnInit } from '@angular/core';
import {Users} from '../shared/model/user.template';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
public model = new Users();
  constructor() { }

  ngOnInit() {
  }
Save(data) {
  
  console.log(data);
}
}
