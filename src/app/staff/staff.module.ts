import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StaffComponent } from './staff/staff.component';
import { StaffModalComponent } from './staff-modal/staff-modal.component';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  declarations: [StaffComponent, StaffModalComponent],
  imports: [CommonModule, StaffRoutingModule],
})
export class StaffModule {}
