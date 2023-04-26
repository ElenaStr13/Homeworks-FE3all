import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
@Input() name = ''
@Input() status = ''
@Input() file = File
@Input() imagePreview = ''
@Input() charseAmount = 0;

RemoveUser() {
  this.name = '';
  this.status = '';
  //this.file = undefined;
  this.charseAmount = 0;
}
}
