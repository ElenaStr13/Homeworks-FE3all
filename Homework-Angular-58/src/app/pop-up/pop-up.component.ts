import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  group = '';
  @Output() close = new EventEmitter;


}
