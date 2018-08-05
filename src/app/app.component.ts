import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  address = {street: 'Musterstr 1', city: 'Musterstadt'};

  changeAddress() {
    this.address = {
      street: 'new street', city: 'new city'
    };
  }
}
