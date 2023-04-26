import { Component, EventEmitter, Output, ViewChild, ElementRef, NgModule } from '@angular/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() onUser = new EventEmitter();

  nameInputValue = '';
  statusInputValue = '';
  image = File;
  //imagePreview: any;
  //file: any;
  file: string = '';

  // @ViewChild('input') inputRef: ElementRef
  onName(event: any) {
    this.nameInputValue = event.target.value;
  }
  onStatus(event: any) {
    this.statusInputValue = event.target.value;
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;
    //console.log(files)
    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
    }
    
  }

  resetInput() {
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }

  addNewUser(nameValue: string, statusValue: string) {
    
    const value = {
      name: nameValue,
      status: statusValue
    }
    //console.log(this.file)
    this.onUser.emit(value)
    this.nameInputValue = '';
    this.statusInputValue = '';
    
  }
  // triggerClick() {
  //   this.inputRef.nativeElement.click()
  // }

}
//onFileUpload(event: any) {
  //const file = event.target.files[0];
  // this.file = event.target.files[0]
 // this.image = file

//   const reader = new FileReader()
 // reader.onload = () => {
//    this.imagePreview = reader.result;
//  }
//  reader.readAsDataURL(this.file)
//  console.log(this.file)
//}