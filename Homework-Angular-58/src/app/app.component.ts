import { Component } from '@angular/core';
import {UsersService} from '../app/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})
export class AppComponent {
  constructor(public UsersService: UsersService) {

  }
//   users = [
//     {name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", id:1,},
//     {name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", id:2,},
//     {name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", id:3,},
//     {name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", id:4,},
// ];

}
