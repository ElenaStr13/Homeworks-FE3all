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

  onName(event: any) {
    this.nameInputValue = event.target.value;
    //console.log(this.nameInputValue)
  }
  
  addNewName(nameValue: string) {
    const value = {
      name:nameValue
    }   
    console.log(value.name)
    this.onUser.emit(value)
    //this.nameInputValue = '';    
  }
  
  // addNewName(event: any){
  //   this.name = event.target.value;
  // }

  // NameInputValue = '';

  // onName(event: any) {
  //   this.NameInputValue = event.target.value;
  // }
}
