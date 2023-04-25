import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() group = ''

  @Output() onUser = new EventEmitter();
  groupInputValue = '';

  onGroup(event: any) {
    this.groupInputValue = event.target.value;
  }

  addNewGroup(groupValue: string) {
    const value = {
      name: groupValue      
    }
   
    this.onUser.emit(value)
    this.groupInputValue = '';   
  }

}
