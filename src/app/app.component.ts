import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <h1>{{title}}</h1>
  <pm-products></pm-products>`,
  providers: [ProductService]
})
export class AppComponent {
  title: string = ' Acme Product Management';
}
