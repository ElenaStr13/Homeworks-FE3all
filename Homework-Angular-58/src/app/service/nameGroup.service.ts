import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NameGroupService {

  nameInputValue: string = '';
  newNameGroup: string = 'Healthy lifestyle'

  onName(event: any){
    this.nameInputValue = event.target.value;
  }
 
  onEdit() {
    this.newNameGroup = this.nameInputValue;
    this.nameInputValue = '';
  }
}