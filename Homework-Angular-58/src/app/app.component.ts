import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { UsersService } from '../app/service/users.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})
export class AppComponent {
  constructor(public UsersService: UsersService) { } 

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>

  //constructor(public HeaderComponent: HeaderComponent){}

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    
    //this.componentRef.instance.group = this.group
    this.componentRef.instance.close.subscribe(()=>{this.viewRef.clear()})
  }
}
