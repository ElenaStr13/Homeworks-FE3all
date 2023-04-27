import { Component, Output, EventEmitter } from '@angular/core';
import { NameGroupService } from '../service/nameGroup.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  //group = 'Healthy lifestyle';
  @Output() close = new EventEmitter;

  constructor(
    public nameGroupService: NameGroupService,
    public usersService: UsersService
  ) {}
}
