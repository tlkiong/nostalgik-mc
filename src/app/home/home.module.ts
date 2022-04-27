import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { ServerModalComponent } from './server-modal/server-modal.component';

@NgModule({
  declarations: [HomeComponent, ServerModalComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
