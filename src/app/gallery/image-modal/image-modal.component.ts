import { Component, OnInit } from '@angular/core';
import { ImageInfo } from '../interfaces/image-info.interface';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent
  extends SimpleModalComponent<ImageInfo, undefined>
  implements ImageInfo
{
  path = '';
  caption = '';

  constructor() {
    super();
  }
}
