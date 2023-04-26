import { Component, Input, EventEmitter, Output } from '@angular/core';
import {UsersService} from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService],
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  constructor(public UsersService: UsersService){}

 @Output() onUser = new EventEmitter();
  nameInputValue = '';
  statusInputValue = '';

  addNewName() {
    this.name = this.nameInputValue;
  }
  
  addNewStatus(){
    this.status = this.statusInputValue;
  }

}
