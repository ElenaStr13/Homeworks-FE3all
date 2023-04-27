import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NameGroupService } from '../service/nameGroup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Input() group = ''

  //@Output() onUser = new EventEmitter();
  
  // groupInputValue = '';

  // addNewGroup() {
  //   this.group = this.groupInputValue;
  // }  
  constructor(
    public nameGroupService: NameGroupService
  ) {}

}
