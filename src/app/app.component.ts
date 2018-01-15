import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <h1>{{title}}</h1>
  <pm-products></pm-products>`
  ,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = ' Acme Product Management';
}
