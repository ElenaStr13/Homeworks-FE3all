import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  user = {name: "", status: "", image: ""};
  addUser(newUser: any) {
    this.user.name = newUser.name
    this.user.status = newUser.status
    this.user.image = newUser.image
  }

  charseAmount = 0;
  ngOnInit() {
    this.charseAmount = this.user.status.length
  }
  ngDoCheck() {
    this.charseAmount = this.user.status.length
  }
}
