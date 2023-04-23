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
// img = 'https://blogs.nvidia.com/wp-content/uploads/2023/01/creators-collab-hero-image-kv-v2-1280x720.jpg'
}
