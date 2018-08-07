import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-angular-button',
  templateUrl: './angular-button.component.html',
  styleUrls: ['./angular-button.component.css']
})
export class AngularButtonComponent {

  @Input() text = '';
  @Output() myClick = new EventEmitter();

  constructor() { }

  onClick() {
    this.myClick.emit();
  }
}
