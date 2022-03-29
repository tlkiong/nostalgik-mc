import { CommonModule } from '@angular/common';
import { LoaderFullPageComponent } from './loader-full-page/loader-full-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoaderFullPageComponent],
  exports: [LoaderFullPageComponent],
  imports: [CommonModule],
})
export class LoaderModule {}
