import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GalleryComponent, ImageModalComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
