import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import {UsersService} from '../app/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})
export class AppComponent {
  constructor(public UsersService: UsersService) { }

  //developers = […];

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>

showPopUp() {
  this.viewRef.createComponent(PopUpComponent);
  this.componentRef.instance.close.subscribe()
}
//   name = {name: ''}

// addName(newName: any) {
//   this.name = newName
// }
}
