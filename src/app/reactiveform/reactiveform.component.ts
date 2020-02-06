import { Component, OnInit } from '@angular/core';
import { Iusers } from '../shared/model/user.reactive';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserRegx } from './userRegx';
import { ScriptService } from './script.service';
declare let pdfMake: any;
import { Alldetails } from './resume';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  Alldetails = new Alldetails()
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private scriptService: ScriptService) { 
    this.scriptService.load('pdfMake', 'vfsFonts');
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      'username': ['', [Validators.required, Validators.minLength(5), UserRegx.Username]],
      'password': ['', [Validators.required, UserRegx.Password]],
      'email': ['', [Validators.required, UserRegx.Email]]
    })
  }
  
  Save(data: Alldetails) {
    this.submitted = true;
    if (!this.userForm.valid) { return; }
    console.log(this.userForm.value.username);
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
    
  }

  generatePdf(action = 'open') {
    console.log(pdfMake);
    
  }

  getDocumentDefinition() {

    return {
      content: [
        {
          text: 'CTCL Application',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: 'name: ' +this.userForm.value.username,
              style: 'name'
            },
            {
              text: "Password: "+  this.userForm.value.password,
            },
            {
              text: 'Email : ' + this.userForm.value.email,
            }
            ]
          ]
        }
      ]
    };
  }


}