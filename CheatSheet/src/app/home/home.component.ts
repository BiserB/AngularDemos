import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>Home<h1>
  
  <div *ngIf="myBool; then tmpl1 else tmpl2"></div>
  
  <ng-template #templ1>True</ng-template>
  <ng-template #templ2>False</ng-template>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
