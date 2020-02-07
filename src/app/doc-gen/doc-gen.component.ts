import { Component, OnInit } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

@Component({
  selector: 'app-doc-gen',
  templateUrl: './doc-gen.component.html',
  styleUrls: ['./doc-gen.component.css']
})
export class DocGenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  create(){
    const doc = new Document();
    doc.addSection({
      properties: {},
      children: [
          new Paragraph({
              children: [
                  new TextRun("Hello World"),
                  new TextRun({
                      text: "Foo Bar",
                      bold: true,
                  }),
                  new TextRun({
                      text: "\tGithub is the best",
                      bold: true,
                  }),
              ],
          }),
      ],
  });
  return doc

  }
  
  public download(): void {
    var doc = this.create()
    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }


}
