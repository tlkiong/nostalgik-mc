import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StaffComponent } from './staff/staff.component';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  declarations: [StaffComponent],
  imports: [CommonModule, StaffRoutingModule],
})
export class StaffModule {}
