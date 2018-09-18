import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  inputString:string = "Initial value";
  addUser(frm)
  {
    console.log(frm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
