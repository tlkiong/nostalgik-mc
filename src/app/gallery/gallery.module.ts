import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
