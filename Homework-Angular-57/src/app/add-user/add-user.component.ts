import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() onUser = new EventEmitter();
  //user = {name: "Mike", status: "I`m learning Angular", avatar: "./url"}
  nameInputValue = '';
  statusInputValue = '';
  image = File;
  imagePreview: any;
  file: any;

 // @ViewChild('input') inputRef: ElementRef
  onName(event: any) {
    this.nameInputValue = event.target.value;
  }
  onStatus(event: any) {
    this.statusInputValue = event.target.value;
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    // this.file = event.target.files[0]
    this.image = file

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.file)
    console.log(this.file)
  }

  addNewUser(nameValue: string, statusValue: string, file: any) {
    const value = {
      name: nameValue,
      status: statusValue,
      file: file
    }
    console.log(this.file)
    this.onUser.emit(value)
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.file = null;
  }
  // triggerClick() {
  //   this.inputRef.nativeElement.click()
  // }

}
